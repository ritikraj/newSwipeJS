/**
 * Created by Eleven on 17-05-2019.
 */


function Swipe(el,options) {
    var preventDefaultBehaviour = (typeof options.preventDefaultBehaviour !== 'undefined') ?  options.preventDefaultBehaviour : true;
    var swipeX = (typeof options.swipeX !== 'undefined') ? options.swipeX : true;
    var swipeY = (typeof options.swipeY !== 'undefined') ? options.swipeY : true;
    if (el instanceof jQuery) el = el[0];
    var that = this;
    this.behavior = function (e) {
        if(e.cancelable){
            e.preventDefault();
            e.stopPropagation();
        }
    };
    this.swipeUp = function () {
        var swipedUp = new CustomEvent('swipedUp');
        el.dispatchEvent(swipedUp);
    };
    this.swipeDown = function () {
        var swipedDown = new CustomEvent('swipedDown');
        el.dispatchEvent(swipedDown);
    };
    this.swipeLeft = function () {
        var swipedLeft = new CustomEvent('swipedLeft');
        el.dispatchEvent(swipedLeft);
    };
    this.swipeRight = function () {
        var swipedRight = new CustomEvent('swipedRight');
        el.dispatchEvent(swipedRight);
    };
    this.checkSwipe = function () {
        el.ontouchstart = function (e) {
            this.startX = 0;
            this.startY = 0;
            var touchobj = e.changedTouches[0];
            this.startX = parseInt(touchobj.clientX);
            this.startY = parseInt(touchobj.clientY);
            if(preventDefaultBehaviour) that.behavior(e)
        };
        el.ontouchmove = function (e) {
            var touchobj = e.changedTouches[0];
            this.distX = parseInt(touchobj.clientX) - this.startX;
            this.distY = parseInt(touchobj.clientY) - this.startY;
            if(preventDefaultBehaviour) that.behavior(e);
            this.touchMove = true;
        };
        el.ontouchend = function (e) {
            if(preventDefaultBehaviour) that.behavior(e);
            var touchobj = e.changedTouches[0];
            if (Math.abs(this.distX) > Math.abs(this.distY) && Math.abs(this.distX) > 30 && this.touchMove && swipeX) {
                this.touchMove = false;
                if (this.distX < 0) {
                    that.swipeLeft();
                } else {
                    that.swipeRight();
                }
            }
            else if(Math.abs(this.distY) > Math.abs(this.distX) && Math.abs(this.distY) > 30 && this.touchMove && swipeY){
                this.touchMove = false;
                if (this.distY < 0) {
                    that.swipeUp();
                } else {
                    that.swipeDown();
                }
            }
            else {
                this.touchMove = false;
            }
        };
    };
    this.checkSwipe();
}
