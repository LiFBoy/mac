'usr strict';

import React from 'react';

import Foot from '../Foot'

import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'

import {HttpService} from '../../Http'

class Temple extends React.Component {
    constructor() {
        super();
        this.state={
            templeStatuses:[]
        }
    }

    componentWillMount() {

        this.status();

    }

    async status(){
        let code = await HttpService.query({
            url: '/v1/public/get/temple/status',
            data: {
                templeId:'1'
            }
        });
        console.log(code)

        this.setState({
            templeStatuses:code.templeStatuses
        })
    }

    render(){

        const {templeStatuses}=this.state;
        return (

            <div className="temple-container app-container">


                <div className="middle">

                    {
                        templeStatuses.map((json,index)=>(
                            <div className="dynamic-content app-padding-lr24" key={index}>
                                <div className="step temple-name">
                                    <div>
                                        <div className="temple-img"><img className="app-wh100-all-radius" src="http://pic.58pic.com/58pic/11/52/20/45s58PICVat.jpg"/></div>
                                    </div>
                                    <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                        <div className="app-333-font28 app-line-height-one">灵隐寺</div>
                                        <div className="app-999-font24 app-line-height-one" style={{paddingTop:'12px'}}>{json.timeStr}</div>
                                    </div>
                                </div>

                                <div className="temple-content">
                                    <div className="step ">
                                        <div className="s-flex1 app-333-font28">
                                            {json.content}
                                        </div>
                                    </div>

                                    <div className="step" style={{paddingTop:'24px'}}>
                                        <div className="s-flex1" style={{flexWrap:'wrap'}}>
                                            {
                                                json.pictures.map((json,index)=>(
                                                    <div className="upload-img">
                                                        <img src={json} className="app-wh100-all" />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="step right-corner">

                                    <div className="s-flex1 s-j-end">

                                        <img className="img" src={pac}/>
                                        <div className="number app-999-font24 padding-right-40">{json.upvoteNumber}</div>



                                        <img className="img" src={comments}/>
                                        <div className="number app-999-font24">{json.commentNumber}</div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }






                </div>

                {/*<Foot type="2"></Foot>*/}


            </div>

        )
    }
}


export default Temple