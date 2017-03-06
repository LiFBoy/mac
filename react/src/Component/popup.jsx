'use strict';

import React from 'react';

export  default  class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    yes_cb() {
        this.props.config.yes_cb();
    }

    no_cb() {

        this.props.config.no_cb();
    }

    componentWillReceiveProps() {
        setTimeout(function () {
            this.setState({
                blockOrNone: this.props.blockOrNone,
                _flag: this.props._flag
            })
        }.bind(this), 0)

    }


    render() {
        var config = this.props.config;
        var isSure = config.isSure;
        var isCancel = config.isCancel;

        const {blockOrNone, _flag}=this.state;

        let width={
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }

        return (

            <div>

                {
                    !!this.state.blockOrNone && !!this.state._flag ?

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