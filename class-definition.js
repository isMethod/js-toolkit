/**
 * 4种常用的JS类定义
 * 
 */

// 方法1 对象直接量
var TestClass01 = {
    v1 : "",
    get_v1 : function() {
        return this.v1;
    },
    set_v1 : function(v) {
        this.v1 = v;
    }
};

// 方法2 定义函数对象
var TestClass2 = function() {
    var v1 = "";
    this.get_v1 = function() {
        return this.v1;
    };
    this.set_v1 = function(v) {
        this.v1 = v;
    }
};

// 方法3 原型继承
var TestClass3 = new Function();
    TestClass3.prototype = {
    v1 : "",
    get_v1 : function() {
        return this.v1;
    },
    set_v1 : function(v) {
        this.v1 = v;
    }
};

// 方法4 工厂模式
function TestClass4() {
    var tmp = new Object();
    tmp.v1 = "";
    tmp.get_v1 = function() {
        return tmp.v1;
    };
    tmp.set_v1 = function(v) {
        tmp.v1 = v;
    };
    return tmp;
}