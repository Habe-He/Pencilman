var Tool = Tool || {}

Tool.getVisibleSize = function () {
    return cc.view.getVisibleSize();
};

Tool.getWinSize = function () {
    cc.game.setFrameRate()
    return cc.director.getWinSize();
};

Tool.getFrameSize = function () {
    return cc.view.getFrameSize();
};



Tool.getDesignSize = function () {
    return cc.size(960, 1136);
};

Tool.setResolution = function () {
    if (cc.sys.os == cc.sys.ANDROID || cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_WINDOWS || cc.sys.os == cc.sys.MOBILE_BROWSER) {
        if ((Tool.getFrameSize().width / Tool.getFrameSize().height) >= (Tool.getDesignSize().width / Tool.getDesignSize().height)) {
            var width = Tool.getFrameSize().width * (Tool.getDesignSize().height / Tool.getDesignSize().width);
            cc.view.setDesignResolutionSize(width, Tool.getDesignSize().height, cc.ResolutionPolicy.FIXED_HEIGHT);
        }
        else {
            var height = Tool.getFrameSize().height * (Tool.getDesignSize().width / Tool.getDesignSize().height);
            cc.view.setDesignResolutionSize(Tool.getDesignSize().width, height, cc.ResolutionPolicy.FIXED_WIDTH);
        }
    }
    else { 
        cc.view.setDesignResolutionSize(Tool.getDesignSize().width, Tool.getDesignSize().height, cc.ResolutionPolicy.EXACT_FIT);
    }
};

module.exports = Tool;