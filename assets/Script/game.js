var Tool = require('./Tool/Tool');

cc.Class({
    extends: cc.Component,
    // mixins: [cc.Graphics],

    properties: {
        row: 5,
        column: 7
    },

    // onLoad () {},

    start() {
        // 绘制线段时间
        this.drawTime = 2.5;

        Tool.setResolution();

        this.startTime = 0;
        this.isLine2 = false;
        this.drawPanel = this.node.getChildByName("drawPanel");
        this.Line_0 = this.drawPanel.getChildByName("S_0");

        var visibleSize = Tool.getVisibleSize();
        this.moveWidth = visibleSize.width - this.Line_0.getComponent(cc.Widget).node.x * 2;
        this.Line_1 = this.drawPanel.getChildByName("S_1");
        
        this.Line_1.getComponent(cc.Widget).updateAlignment();
        this.moveHeight = visibleSize.height - (visibleSize.height - this.Line_1.getComponent(cc.Widget).node.y) * 2;

        // this.drawCall(this.Line_0, this.drawTime, this.moveWidth / this.Line_0.width, 1, null);
        // this.drawCall(this.Line_1, this.drawTime, 1, this.moveHeight / this.Line_1.height, 1);
    },

    drawLine: function (node, stage) {
        var self = this;
        if (stage == undefined || stage == null) {
            return;
        }

        // 第一阶段继续创建边框
        if (stage == 1) {
            var rowLine = cc.instantiate(self.Line_0);
            rowLine.setContentSize(2, 2);
            rowLine.scale = 1;
            rowLine.setPosition(self.Line_0.x, Tool.getVisibleSize().height - self.Line_0.y);
            this.drawPanel.addChild(rowLine);
            this.drawCall(rowLine, this.drawTime, this.moveWidth / rowLine.width, 1, null);

            var rowLine = cc.instantiate(self.Line_1);
            rowLine.setContentSize(2, 2);
            rowLine.scale = 1;
            rowLine.setPosition(Tool.getVisibleSize().width - self.Line_1.x, self.Line_1.y);
            this.drawPanel.addChild(rowLine);
            this.drawCall(rowLine, this.drawTime, 1, this.moveHeight / rowLine.height, 2);
        }
        else if (stage == 2) {
            var cellWidth = this.moveWidth / this.row - 1;
            var cellHeight = this.moveHeight / this.column - 1;
            for (var i = 0; i < this.row - 1; i++) {
                var rowLine = cc.instantiate(this.Line_1);
                rowLine.setAnchorPoint = (0, 0.5);
                rowLine.setContentSize = (2, 2);
                rowLine.scale = 1;
                rowLine.setPosition(this.Line_1.x + cellWidth * (i + 1), Tool.getVisibleSize().height - self.Line_1.y);
                this.drawPanel.addChild(rowLine);
                this.drawCall(rowLine, this.drawTime, 1, -(this.moveHeight / rowLine.height), null);
            }

            for (var i = 0; i < this.column - 1; i++) {
                var rowLine = cc.instantiate(this.Line_0);
                rowLine.setAnchorPoint = (1, 0.5);
                rowLine.setContentSize = (2, 2);
                rowLine.scale = 1;
                rowLine.setPosition(this.Line_0.x + this.moveWidth, self.Line_0.y - cellHeight * (i + 1));
                this.drawPanel.addChild(rowLine);
                this.drawCall(rowLine, this.drawTime, -(this.moveWidth / rowLine.width), 1, null);
            }
        }
    },

    drawCall: function (node, time, x, y, data) {
        var self = this;
        node.runAction(cc.sequence(cc.scaleTo(time, x, y), cc.callFunc(self.drawLine, this, data)));
    },

    update (dt) {
        this.startTime ++;
    },
});