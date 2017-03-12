'use strict';

import React from 'react';

export  default  class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blockOrNone:false,
            _flag:false
        };
    }


    yes_cb() {
        this.props.config.yes_cb();
    }

    no_cb() {

        this.props.config.no_cb();
    }

    //props是父组件－》子组件，父组件render，子组件就调用

    componentWillReceiveProps(nextProps) {

        // if(!!nextProps.blockOrNone&&!!nextProps._flag){
        //
        // }

        setTimeout(()=>{
            this.setState({
                blockOrNone: this.props.blockOrNone,
                _flag: this.props._flag
            })
        },0)

    }



    render() {
        var config = this.props.config;
        var isSure = config.isSure;
        var isCancel = config.isCancel;

        const {blockOrNone, _flag}=this.state;

        let width={
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        };



        return (

            <div>

                {
                    (!!this.state.blockOrNone && !!this.state._flag) ?

                        <div className="none">
                            <div className="popup_zindex" style={width}></div>


                            <div className="popup_content">

                                {
                                    this.props.config.header == '' ? '' :
                                        <div className="header app-333-font32 border-bottom">

                                            {
                                                this.props.config.header
                                            }
                                        </div>
                                }
                                <div className="popup_content2" style={this.props.config.contentCss}>
                                    {this.props.config.content}
                                </div>
                            </div>


                        </div>

                        : ''
                }
            </div>





        )
    }
}