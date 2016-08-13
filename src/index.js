import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HelloWorld from './component/HelloWorld';
import LikeButton from './component/LikeButton';
import Avatar from './component/Avatar';
import Check from './component/Check';
import OpacityWord from './component/OpacityWord';
import Input from './component/Input';
import Select from './component/Select';
import './index.css';

ReactDOM.render(
    <App/>, document.getElementById('root'));
ReactDOM.render(
    <HelloWorld date={new Date()}/>, document.getElementById('hello'));
ReactDOM.render(
    <LikeButton/>, document.getElementById('btn'));
ReactDOM.render(
    <Avatar username="jack"/>, document.getElementById('avatar'));
ReactDOM.render(
    <Check href="www.baidu.com">hello</Check>, document.getElementById('check'));
ReactDOM.render(
    <OpacityWord name="TopGrd"></OpacityWord>, document.getElementById('opa'));
ReactDOM.render(
    <Input/>, document.getElementById('input'))
ReactDOM.render(
    <Select/>, document.getElementById('select'), function () {
        console.warn('react select loaded!');
    })
