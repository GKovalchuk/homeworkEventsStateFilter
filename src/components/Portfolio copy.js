import React, { Component } from 'react';
import Toolbar from './Toolbar.js';
import ProjectList from './ProjectList.js';

export class Portfolio extends Component {
    state = {
        filters: [{
            id: 0, filter: 'All', selected: true
        }, {
            id: 1, filter: "Websites", selected: true
        }, {
            id: 2, filter: "Flayers", selected: false
        }, {
            id: 3, filter: "Business Cards", selected: false
        }],
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
        this.setState(prevState => ({
            filters: prevState.filters.map(filterItem => {
                if (filterItem.id === item.id) {
                    return { ...filterItem, selected: !filterItem.selected };
                } return filterItem;
            })
        }));
    }
    // filterOutputlist = item => {
    //     this.setState(prevState => ({ outputList: outputList.filter(item => listItem.category === item.filter) }))
    // }

    render() {
        const { filters, outputList } = this.state;
        return (
            <>
                {filters.map(filterItem => <Toolbar
                    key={filterItem.id}
                    item={filterItem}
                    filter={filterItem.filter}
                    selected={filterItem.selected}
                    onSelectFilter={this.onSelect}
                />)}
                {outputList.map(listItem =>
                    <ProjectList key={listItem.id} item={listItem} projects={listItem.img} />
                )}
            </>
        )
    }
}
export default Portfolio;