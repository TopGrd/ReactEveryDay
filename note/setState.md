# React中的setState是异步的。
在写Select组件时，发现我换了选项后，结果依然返回之前的值，导致我的选项与值的展示不对应。以下是关于这个问题的解释：  
先看源码ReactComponent.js中关于setState函数的文档  
```javascript

/**
* Sets a subset of the state. Always use this to mutate
* state. You should treat `this.state` as immutable.
*
* There is no guarantee that `this.state` will be immediately updated, so
* accessing `this.state` after calling this method may return the old value.
*
* There is no guarantee that calls to `setState` will run synchronously,
* as they may eventually be batched together.  You can provide an optional
* callback that will be executed when the call to setState is actually
* completed.
*
* When a function is provided to setState, it will be called at some point in
* the future (not synchronously). It will be called with the up to date
* component arguments (state, props, context). These values can be different
* from this.* because your function may be called after receiveProps but before
* shouldComponentUpdate, and this new state, props, and context will not yet be
* assigned to this.
*
* @param {object|function} partialState Next partial state or function to
*        produce next partial state to be merged with current state.
* @param {?function} callback Called after state is updated.
* @final
* @protected
*/
ReactComponent.prototype.setState = function (partialState, callback) {
    !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)
        ? true
            ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.')
            : _prodInvariant('85')
        : void 0;
    this.updater.enqueueSetState(this, partialState);
    if (callback) {
        this.updater.enqueueCallback(this, callback, 'setState');
    }
};
```  
文档解释了setState()是异步执行的，所以在setState中提供了回调函数，所以可以把setState后面的动作设置到毁掉函数里，:)
