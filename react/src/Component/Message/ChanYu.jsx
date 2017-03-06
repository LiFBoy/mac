'use strict';

import React from 'react';

import Foot from '../Foot'

import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'
import {HttpService,FormDate} from '../../utils';
import LocalStorage from '../../LocalStorage'
class ChanYu extends React.Component {
    constructor() {
        super();
        this.state = {
            dailySentences: []
        }
    }

    componentWillMount() {

        this.sentence();
    }

    async sentence() {
        console.log(LocalStorage.get('token'))

        try {
            let code = await HttpService.query({
                url: '/v1/p/notify/get/daily/sentence',
                data: {accessToken: LocalStorage.get('token')}
            })

            console.log(code)

            this.setState({
                dailySentences: code.dailySentences
            })
        } catch (error) {

        }

    }






    render() {

        const {dailySentences}=this.state;

        return (

            <div className="temple-container app-container">


                <div className="middle">

                    {
                        dailySentences.length != 0 ? dailySentences.map((json, index)=>(
                            <div className="dynamic-content app-padding-lr24 border-bottom" key={index}>
                                <div className="step temple-name">
                                    <div>
                                        <div className="temple-img"><img className="app-wh100-all-radius"
                                                                         src="http://pic.58pic.com/58pic/11/52/20/45s58PICVat.jpg"/>
                                        </div>
                                    </div>
                                    <div className="s-right s-j-center"
                                         style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                        <div className="app-333-font28 app-line-height-one">每日一句</div>
                                        <div className="app-999-font24 app-line-height-one"
                                             style={{paddingTop: '12px'}}>{FormDate.time(json.publicTime)}</div>
                                    </div>
                                </div>

                                <div className="temple-content" style={{paddingBottom: '32px'}}>
                                    <div className="step ">
                                        <div className="s-flex1 app-333-font28">
                                            {json.content}
                                        </div>
                                    </div>

                                </div>


                            </div>
                        )) : ''
                    }

                </div>

                {/*<Foot type="2"></Foot>*/}


            </div>

        )
    }
}


export default ChanYu