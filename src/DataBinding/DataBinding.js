import React, { Component } from 'react'

export default class DataBinding extends Component {

    hocVien = {
        ma: 1,
        hoTen: 'Nguyễn văn a',
        hinhAnh: 'https://picsum.photos/200/300'
    }
    //Phương thức rederImg do mình tạo ra
    renderImg() {
        return <img src="https://picsum.photos/200/300" />
    }
    render() {
        let title = 'Hello fe 41';

        return (
            <div>
                <div classname="container">
                    <div className="card text-left">
                        <img width={100} height={100} src={this.hocVien.hinhAnh} />
                        <div className="card-body">
                            <p className="card-text">{this.hocVien.hoTen}</p>
                        </div>
                    </div>
                </div>
                {/* Binding biến */}
                <h1>{title}</h1>
                <input value={title} />
                {/* Binding phương thức */}
                {this.renderImg()}
            </div>
        )
    }
}
