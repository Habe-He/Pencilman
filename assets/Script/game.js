cc.Class({
    extends: cc.Component,
    // mixins: [cc.Graphics],

    properties: {
        row: 0,
        column: 0
    },

    // onLoad () {},

    start() {
        cc.log("row =", this.row);
        cc.log("column =", this.column);

        

        this.startTime = 0;
        var drawPanel = this.node.getChildByName("drawPanel");
        this.Line_0 = drawPanel.getChildByName("S_0");
        // cc.log(this.Line_0);
        var visibleSize = Tool.getVisibleSize();
        this.moveWidth = visibleSize.width - this.Line_0.x * 2;
        cc.log("this.moveWidth =", this.moveWidth);

        this.Line_1 = drawPanel.getChildByName("S_1");
        this.moveHeight = visibleSize.height - (visibleSize.height - this.Line_1.y) * 2;
        cc.log("this.moveHeight =", this.moveHeight);

        // this.drawLine(this.row, this.column);
    },

    drawLine: function (_row, _column) {
        
    },

    update (dt) {
        this.startTime += dt;
        if (this.Line_0.width <= this.moveWidth) {
            this.Line_0.width += 4;
        }

        if (this.Line_1.height <= this.moveHeight) {
            this.Line_1.height += 4;
        }
        
    },
});