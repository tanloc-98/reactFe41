import React, { Component } from 'react'
import BtHeader from './BtHeader'
import BtSlider from './BtSlider'
import BtProductList from './BtProductList'
import BtFooter from './BtFooter'
import BtProductC from './BtProductC'

export default class BaiTapDanLayout extends Component {
    render() {
        return (
            <div>
               <BtHeader />
               <BtSlider />
               <BtProductList />
               <BtProductC />
               <BtFooter />
            </div>
        )
    }
}
