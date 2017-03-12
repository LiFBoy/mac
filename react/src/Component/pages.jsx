import React from 'react';

export default class Page extends React.Component {
    constructor() {
        super();
        this.state = {
            showLinkNum: 7, //每次显示的页数,
            pageIndex: '',
            pageNum: ''
        }


    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentWillReceiveProps(next) {



        if (!!next) {



            const pageIndex = this.props.start;

          //  console.log(pageIndex);
            const pageNum = (this.props.total % this.state.showLinkNum) == 0 ? this.props.total / this.state.showLinkNum : parseInt(this.props.total / this.state.showLinkNum + 1);

        //    console.log(pageNum);

            this.setState({
                pageNum: pageNum,
                pageIndex: pageIndex
            });
        }

    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
    }

    //控制页码跳转的函数
    pageIndexChange(event) {
        console.log(event)
        let target = event.target;
        if (target.parentNode.className == 'disabled') return;
        let index = "";


        let pageIndex = target.value;


        let pageInputIndex = target.value;
        var type = target.getAttribute("data-type");
        if (type == "link") {
            index = event.target.innerHTML;
            if (!isNaN(index)) {
                pageIndex = index;
            } else if (index == "首页") {
                pageIndex = 1;
            } else if (index == "尾页") {
                pageIndex = this.state.pageNum;
            } else if (index == "»") {
                pageIndex = parseInt(this.state.pageIndex) + 1;
            } else if (index == "«") {
                pageIndex = parseInt(this.state.pageIndex) - 1;
            }
            this.props.pageIndexChange(pageIndex);
        } else if (type == "btn-go") {
            let goIndex = document.getElementById("index-input");
            pageIndex = goIndex.value;
            this.props.pageIndexChange(pageIndex);
        } else if (type == "input") {
            return null;
        }

        this.setState({pageIndex: pageIndex})
    }

    render() {
        var style={
            color:'red',
            display:'flex',
            width:'40px',
            listStyle:'none',
            textDecoration:'none'
        };
        var arrFirst = [];//首页和前一页
        var arrLast = [];//尾页和后一页
        var arrLinkShow = []; //每次显示的页码
        var prevDisplay = 1 == this.state.pageIndex ? 'disabled' : ''; //当前页为1时，首页和前一页失效

        var lastDisplay = this.state.pageNum == this.state.pageIndex ? 'disabled' : '';//当前页为最后一页时，尾页和后一页失效

        // var startIndex=''
        // if(this.state.pageIndex<5){
        //     startIndex=1;
        //     endIndex=startIndex+4
        // }else if(this.state.pageIndex<20||this.state.pageIndex>5){
        //     startIndex=this.state.pageIndex;
        //     endIndex=startIndex+4
        // }
        console.log(this.state.pageIndex);

        var startIndex = (Math.ceil(this.state.pageIndex / this.state.showLinkNum) - 1) * this.state.showLinkNum + 1;//每次显示页数的开始页

        console.log(startIndex);

        var endIndex = Math.min(startIndex + this.state.showLinkNum, (this.state.pageNum + 1));//每次显示页数的结束页

        console.log(endIndex);


        for (var i = startIndex; i < endIndex; i++) {

            var currentIndexDisplay = i == this.state.pageIndex ? 'active' : '';
            // console.log(i);
            arrLinkShow.push(
                <li key={i} className={currentIndexDisplay} style={style}>
                    <a href="javascript:;" data-type="link">{i}</a>
                </li>
            )
        }
        arrFirst.push(
            <li key="first" className={prevDisplay} style={style}>
                <a href="javascript:;" data-type="link">首页</a>
            </li>
        );
        arrFirst.push(
            <li key="pre" className={prevDisplay} style={style}>
                <a href="javascript:;" aria-label="Previous" data-type="link" id="pre">
                    «
                </a>
            </li>
        );
        arrLast.push(
            <li key="last" className={lastDisplay} style={style}>
                <a href="javascript:;" data-type="link">尾页</a>
            </li>
        );
        arrLast.push(
            <li key='next' className={lastDisplay} style={style}>
                <a href="javascript:;" aria-label="Next" data-type="link" id="next">
                    »
                </a>
            </li>
        )
        return (
            <nav className="text-right" key="page" style={{display:'flex',marginTop:'100px'}}>
                <ul key='page-ul' style={{display:'flex'}} className="pagination" onClick={this.pageIndexChange.bind(this)}>
                    {arrFirst}
                    {arrLinkShow}
                    {arrLast}
                    <li style={style}>
                        <input type="text" data-type="input" id="index-input"/>
                        <a href="javascript:;" className="btn page-go" data-type="btn-go">跳转</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
