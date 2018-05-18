(function(){
        var defaultPng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABlBMVEXu7u7u7u4MXmA/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFElEQVQ4jWNgGAWjYBSMglFATwAABXgAAfmlXscAAAAASUVORK5CYII=";
         function LazyImg(container,selector){
            this.container=container;
            this.selector=selector||"lazy";
            this.init();
         }
         LazyImg.proto=LazyImg.prototype;  
         LazyImg.proto.init=function(){
            this.setPosition();
            this.initEvnt();
            this.lazyImgs();
         }
          LazyImg.proto.getImgs=function(){
              var imgs=document.querySelectorAll('img['+this.selector+']');
               return imgs
         }
         LazyImg.proto.initEvnt=function(){
              var self=this;
              var dom=this.container.tagName=="HTML"?document.body:this.container;

              dom.onscroll=function(e){
                 self.lazyImgs(this);
             }
         }
          LazyImg.proto.lazyImg=function(img){
            // var tap=50;
             var url=img.getAttribute('data-src');
             var imgs=this.getImgs();
             var load=img.getAttribute('load');
             var top=img.t;
             var scrollTop=this.container.scrollTop;
             var offsetHeight=window.screen.availHeight; 
             var tap=-img.offsetHeight; 
             var load=img.getAttribute('load');
             if(top+tap<offsetHeight+scrollTop){
                if(load=="false"||load==undefined){
                    var image=new Image();
                    image.index=img.ind;
                    image.src=url;
                    //注意:这个地方是异步
                    image.onload=function(){
                      var item=imgs[this.index];
                      var tempLoad=item.getAttribute('load');
                      if(tempLoad=="false"||tempLoad==undefined){
                        item.src=item.getAttribute('data-src');
                        item.setAttribute('load',true);
                        console.log("加载图片"+this.index);
                      }
                    }
                  }
                 }
         }
         LazyImg.proto.lazyImgs=function(){
           var imgs=this.getImgs();
            for(var i=0;i<imgs.length;i++){
              var img=imgs[i];
              this.lazyImg(img);
            }
         }
          LazyImg.proto.setPosition=function(){
             var imgs=this.getImgs();
             for(var i=0;i<imgs.length;i++){
                  var img=imgs[i];
                  // this.setPicSize(img);
                  img.t=img.clientHeight+img.offsetTop;
                  img.ind=i;
                  // img.style.backgroundImage='url('+defaultPng+')';
                  // img.style.backgroundSize='100% 100%';
                  img.src=defaultPng;
             }
          }
          window.LazyImg=LazyImg;
      })()