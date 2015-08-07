var divEl = document.getElementById('div');


//React.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('example')
//);


//var array = ['song', 'jun', 'li'];
//React.render(
//    <div>
//        {
//            array.map(function (item) {
//                return <div>hello,{item}!</div>;
//            })
//        }
//    </div>,
//    divEl
//);


//var array = [
//    <h1>hello </h1>,
//    <h2>world!</h2>
//];
//React.render(
//    <div>{array}</div>,
//    divEl
//);


//var HelloMsg = React.createClass({
//    render: function () {
//        return <h1>hello, {this.props.name}!</h1>
//    }
//});
//React.render(
//    <HelloMsg name="song"></HelloMsg>,
//    divEl
//);


//var List = React.createClass({
//    render: function () {
//        return (
//            <ol>
//                {
//                    this.props.children.map(function (item) {
//                        return <li>{item}</li>
//                    })
//                }
//            </ol>
//        );
//    }
//});
//React.render(
//    <List>
//        <span>hello,</span>
//        <span>world!</span>
//    </List>,
//    divEl
//);


//var Component = React.createClass({
//    click : function () {
//        var txtEl = React.findDOMNode(this.refs['txt']);
//        console.log(txtEl.value);
//    },
//    render: function () {
//        return (
//            <div>
//                <input type="text" ref="txt"/>
//                <input type="button" value="点击" onClick={this.click}/>
//            </div>
//        );
//    }
//});
//React.render(
//    <Component/>,
//    divEl
//);


//var Button = React.createClass({
//    getInitialState: function () {
//        return {liked: false}
//    },
//    click          : function () {
//        this.setState({liked: !this.state.liked});
//    },
//    render         : function () {
//        var text = this.state.liked ? 'true' : 'false';
//        return (
//            <p onClick={this.click}>
//                liked is {text}
//            </p>
//        );
//    }
//});
//React.render(
//    <Button/>,
//    divEl
//);


//var Input = React.createClass({
//    getInitialState: function () {
//        return {
//            value: 'hello'
//        };
//    },
//    onChange       : function (evt) {
//        this.setState({
//            value: evt.target.value
//        });
//    },
//    render         : function () {
//        var value = this.state.value;
//        return (
//            <div>
//                <input type="text" value={value} onChange={this.onChange}/>
//                <p>{value}</p>
//            </div>
//        );
//    }
//});
//React.render(<Input/>, divEl);


//var Hello = React.createClass({
//    getInitialState  : function () {
//        return {
//            opacity: 0.1
//        };
//    },
//    componentDidMount: function () {
//        this.timer = setInterval(function () {
//            var opacity = this.state.opacity;
//            opacity -= 0.05;
//            if (opacity <= 0.1) {
//                opacity = 1;
//            }
//            this.setState({
//                opacity: opacity
//            });
//        }.bind(this), 100);//bind返回函数,并且可改变函数中的this
//    },
//    render           : function () {
//        return (
//            <div style={{opacity:this.state.opacity}}>
//                Hello, {this.props.name}
//            </div>
//        );
//    }
//});
//React.render(<Hello name="world"/>, divEl);


//var User = React.createClass({
//    getInitialState  : function () {
//        return {
//            data: {
//                detail: []
//            }
//        };
//    },
//    componentDidMount: function () {
//        $.jsonp('http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page=1&perpage=10&order=0&code=aa1c9153608a7755b7c20e97c0eade27&vname=jtoolrs0', function () {
//            this.setState({
//                data: jtoolrs0.data
//            });
//        }.bind(this));
//    },
//    render           : function () {
//        return (
//            <div class="list">
//                {
//                    this.state.data.detail.map(function (item) {
//                        return (<p>{item.id} {item.nickname}</p>);
//                    })
//                }
//            </div>
//        );
//    }
//});
//React.render(<User/>, divEl);

var config = [
    {
        href: 'http://sohu.com',
        text: '搜狐网'
    },
    {
        href: 'http://qq.com',
        text: '腾讯网'
    },
    {
        href: 'http://sina.com',
        text: '新浪网'
    }
];
var El = React.createClass({
    getInitialState: function () {
        return {
            status: 1
        };
    },
    getDefaultProps: function () {
        return {
            config: []
        };
    },
    propTypes      : {
        config: React.PropTypes.array
    },
    render         : function () {
        var config = this.props.config;
        var items = config.map(function (item) {
            return (
                <a href={item.href}>
                    {item.text}
                </a>
            );
        });
        return (
            <div className="el">
                {items}
            </div>
        );
    }
});
React.render(<El config={config}/>, divEl);
