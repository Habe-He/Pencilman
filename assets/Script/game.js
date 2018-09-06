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
        cc.log("this.Line_0.size.width =", this.Line_0.width);

        this.drawLine(this.row, this.column);
    },

    drawLine: function (_row, _column) {
        
    },

    update (dt) {
        this.startTime += dt;
        if (this.Line_0.width <= 552) {
            this.Line_0.width += 4;
            cc.log("this.startTime =", this.startTime);
        }
        else {
            // 
        }
    },
});