function area(width, height) {
    return width * height;
}
//这就不对了，因为修改了module的内存地址
module={
    exports:{
        area:area
    }
};