'usr strict';

import React from 'react';
import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pacActive from '../../../src/images/temple/praise－active.png'
import pac from '../../../src/images/temple/praise.png'
import comments from '../../../src/images/temple/comments.png'
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import {HttpService} from '../../utils'
import LocalStorage  from '../../LocalStorage'
class TempleDetail extends React.Component {
    constructor() {
        super();
        this.state={
            templeStatuses:[],
            info:{},
            latestCollections:{},
            bili:{}
        }
    }

    componentWillMount() {
        this.info();

        this.status();
        this.latestCollections()

    }

    componentDidMount(){


            document.getElementById("bar").style.width=this.state.bili+"%";
    }

    async latestCollections(){

        const code=await HttpService.query({
            url:'/v1/temple/get/latest/collection',
            data:{id:this.props.params.id}
        });

        this.setState({
            latestCollections:code,
            bili:(2/code.amount)*100+'%'
        });


        console.log(this.state.bili)

    }

    async info(){
        let code = await HttpService.query({
            url: '/v1/temple/info',
            data: {
               id:this.props.params.id
            }
        });
        console.log(code)
        this.setState({
            info:code
        })

    }



    async status(){
        let code = await HttpService.query({
            url: '/v1/public/get/temple/status',
            data: {
                templeId:this.props.params.id
            }
        });
        console.log(code)

        this.setState({
            templeStatuses:code.templeStatuses
        })
    }


    async upvoteStatus(id){
        let code = await HttpService.saveJson({
            url: '/v1/p/user/upvote/temple/status?accessToken=' + LocalStorage.get('token') + '',
            data: {
                id:id
            }
        });
        console.log(code);
        this.status();


    }


    changeType(type) {
        if (type == 1) {
            window.location.href = '/index.html#/FocusLists/'+ this.props.params.id + ''
        } else if (type == 2) {
            window.location.href = '/index.html#/MessageBoard/'+ this.props.params.id + ''
        } else if (type == 3) {
            window.location.href = "/index.html#/PayRecord"
        }


    }

    render(){
        const {templeStatuses,info,latestCollections}=this.state;

        return (
            <div className="temple-container app-container">
                <div className="top app-padding-lr24">
                    <div className="step">
                        <div className="s-center temple-title">
                            <div style={{width:'200px',height:'200px'}}>
                                <img src={info.headImgUrl} className="app-wh100-all-radius"/>
                            </div>
                        </div>

                    </div>
                    <div className="step">
                        <div className="s-center">
                            <div className="app-666-font28">今日日善</div>
                            <div className="app-333-font28 app-padding-l24">{info.dailyNumber}</div>
                        </div>
                    </div>
                    <div className="step">
                        <div className="s-center">
                            <div className="goAlms step">
                                <Link to="/DayPay" className="app-a s-flex1">
                                <div className="s-flex1 app-padding-l24">
                                    <div><img className="img" src={myalms}/></div>
                                    <div className="app-333-font28" style={{paddingLeft:'14px'}}>去日善></div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="s-center">
                            <div className="app-999-font24">所在地:</div>
                            <div className="app-333-font24">{info.location}</div>

                            <div className="app-padding-lr24"></div>


                            <div className="app-999-font24">现住持:</div>
                            <div className="app-333-font24">{info.abbot}</div>
                        </div>

                    </div>


                    <div className="step h-border">

                            <div className="s-flex1 s-j-center s-flex-d" onClick={this.changeType.bind(this,1)}>
                                <div><img src={chunk1}/></div>
                                <div className="pdt app-666-font24">{info.fansNumber}</div>
                            </div>
                        <div className="s-flex1 s-j-center s-flex-d" onClick={this.changeType.bind(this,2)}>
                            <div><img src={chunk2}/></div>
                            <div className="pdt app-666-font24">{info.leaveNumber}</div>
                        </div>
                        <div className="s-flex1 s-j-center s-flex-d" onClick={this.changeType.bind(this,3)}>
                            <div><img src={chunk3}/></div>
                            <div className="pdt app-666-font24">3333</div>
                        </div>
                    </div>

                    <Link to="/AlmsDetail" className="app-a">
                        <div className="step h-80">
                            <div className="s-center s-j-center app-999-font24">
                                更多资料>
                            </div>
                        </div>
                    </Link>




                </div>
                <div className="app-margin-tb20"></div>
                <div className="middle">
                    <div className="step h-88-b">
                        <div className="s-flex2 s-j-center app-333-font32">{latestCollections.title}</div>
                        <Link to={'/PayHistory/' + this.props.params.id + ''}>
                            <div className="app-padding-r24 app-666-font24" style={{position:'absolute',right:'0',lineHeight:'88px'}}>往期></div>
                        </Link>
                    </div>

                    <div className="app-padding-lr40">
                        <div className="progress-bar">
                            <span className="bar" id="bar"></span>
                        </div>

                        <div className="step">


                            <div className="s-flex1 app-999-font24">{latestCollections.currentAmount}元</div>
                            <div className="s-flex1 s-j-end app-999-font24">{latestCollections.amount}元</div>

                        </div>
                    </div>
                    <div className="step three-chunk">
                        <div className="s-center">

                            <div className="step">
                                <Link to="/PayRecord" className="app-a s-flex1"><div className="chunk app-666-font28 s-flex1 s-j-center">捐款记录</div></Link>
                                <div className="app-padding-lr20"></div>
                                <Link  to={'/UnderstandDetail/' + latestCollections.id + ''}  className="app-a s-flex1"><div className="chunk app-666-font28 s-flex1 s-j-center">了解详情</div></Link>
                                <div className="app-padding-lr20"></div>
                                <Link to="/Pay" className="app-a s-flex1"><div className="chunk app-666-font28 s-flex1 s-j-center">发善心</div></Link>
                            </div>

                        </div>
                    </div>


                    <div className="step dynamic app-padding-lr24">
                        <div className="s-flex1  app-666-font28">
                            动态
                        </div>
                    </div>

                    {
                        templeStatuses.length!=0?templeStatuses.map((json,index)=>(
                                <div className="dynamic-content app-padding-lr24" key={index}>
                                    <div className="step temple-name">
                                        <div>
                                            <div className="temple-img">
                                                <img src="" className="app-wh100-all-radius"/>
                                            </div>
                                        </div>
                                        <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                            <div className="app-333-font28 app-line-height-one">灵隐寺</div>
                                            <div className="app-999-font24 app-line-height-one" style={{paddingTop:'12px'}}>{json.timeStr}</div>
                                        </div>
                                    </div>

                                    <div className="step temple-content">
                                        <div className="s-flex1 app-333-font28">
                                            {json.content}
                                        </div>
                                    </div>

                                    <div className="step right-corner">

                                        <div className="s-flex1 s-j-end">

                                            <div className="step" onClick={this.upvoteStatus.bind(this,json.id)}>

                                                <img className="img" src={pac}/>

                                                <div className="number app-999-font24 padding-right-40">{json.upvoteNumber}</div>
                                            </div>

                                        <Link  to={'/CommentLists/' + json.id + ''}  className="step app-a" >
                                            <img className="img" src={comments}/>
                                            <div className="number app-999-font24">{json.commentNumber}</div>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            )):''
                    }








                </div>
                <div className="no-more">
                    <div className="step">
                        <div className="s-center app-999-font24">没有更多了哦</div>
                    </div>
                </div>


            </div>
        )
    }
}


export default TempleDetail