import React, { Component } from 'react';
import Toolbar from './Toolbar.js';
import ProjectList from './ProjectList.js';

export class Portfolio extends Component {
    state = {
        filters: [{
            id: 0, filter: 'All'
        }, {
            id: 1, filter: "Websites"
        }, {
            id: 2, filter: "Flayers"
        }, {
            id: 3, filter: "Business Cards"
        }],
        selected: 'All',
        outputList: [{
            id: 0,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
            category: "Business Cards"
        }, {
            id: 1,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        }, {
            id: 2,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        }, {
            id: 3,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
            category: "Websites"
        }, {
            id: 4,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
            category: "Business Cards"
        }, {
            id: 5,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
            category: "Websites"
        }, {
            id: 6,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        }, {
            id: 7,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        }, {
            id: 8,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
            category: "Websites"
        }, {
            id: 9,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
            category: "Flayers"
        }, {
            id: 10,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
            category: "Websites"
        }, {
            id: 11,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
            category: "Business Cards"
        }, {
            id: 12,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
            category: "Websites"
        }, {
            id: 13,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        }, {
            id: 14,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        }, {
            id: 15,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
            category: "Websites"
        }, {
            id: 16,
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
            category: "Flayers"
        }]
    }
    onSelect = item => {
        this.setState(prevState => ({ selected: item.filter }))
    }

    render() {
        const { filters, outputList, selected } = this.state;
        return (
            <div className='wrapper'>
                <div className='filterRow'>
                    {filters.map(filterItem => <Toolbar
                        key={filterItem.id}
                        item={filterItem}
                        filter={filterItem.filter}
                        selected={selected}
                        onSelectFilter={this.onSelect}
                    />)}
                </div>
                <div className='projectWrapper'>
                    {selected === 'All' ?
                        outputList.map(listItem => <ProjectList
                            key={listItem.id}
                            item={listItem}
                            projects={listItem.img}
                        />)
                        :
                        outputList.filter(outputList =>
                            (outputList.category === selected)).map(listItem => <ProjectList
                                key={listItem.id}
                                item={listItem}
                                projects={listItem.img}
                            />)
                    }
                </div>

            </div>
        )
    }
}
export default Portfolio;