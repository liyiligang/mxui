/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 对 element-ui 的无限滚动在 el-dialog 上使用的封装
 */
import { ElInfiniteScroll } from "element-plus";

const elScope = 'ElInfiniteScroll'; // scope name
const msgTitle = `[elTableInfiniteScroll]: `; // message title
const elTableScrollWrapperClass = '.el-table__body-wrapper';

export default {
    install: (app, options) => {},
    mounted(el, binding, vnode, oldVnode) {
        // 获取 dialog 中的滚动层
        const scrollElem = el.querySelector(elTableScrollWrapperClass);

        // 如果没找到元素，返回错误
        if (!scrollElem) {
            throw `${msgTitle}找不到 ${elTableScrollWrapperClass} 容器`;
        }

        // 设置自动滚动
        scrollElem.style.overflowY = 'auto';

        // dom 渲染后
        setTimeout(() => {
            if (!el.style.height) {
                scrollElem.style.height = '400px';
                console.warn(
                    `${msgTitle}请尽量设置 el-table 的高度，可以设置为 auto/100%（自适应高度），未设置会取 400px 的默认值（不然会导致一直加载）`
                );
            }

            asyncElOptions(vnode, el, scrollElem);

            // 绑定 infinite-scroll
            if (ElInfiniteScroll.mounted == undefined){
                throw `${msgTitle} mounted is undefined`;
            }
            ElInfiniteScroll.mounted(scrollElem, binding, vnode, oldVnode);

            // 将子集的引用放入 el 上，用于 unmounted 中销毁事件
            el[elScope] = scrollElem[elScope];
        }, 0);
    },
    updated(el, binding, vnode) {
        asyncElOptions(vnode, el, el.querySelector(elTableScrollWrapperClass));
    },
    unmounted(el, binding, vnode, oldVnode){
        // if (ElInfiniteScroll.unmounted == undefined){
        //     throw `${msgTitle} unmounted is undefined`;
        // }
        // ElInfiniteScroll.unmounted(el, binding, vnode, oldVnode)
    }
};

/**
 * 同步 el-infinite-scroll 的配置项
 * @param sourceVNode
 * @param sourceElem
 * @param targetElem
 */
function asyncElOptions(sourceVNode, sourceElem, targetElem) {
    let value;
    ['disabled', 'delay', 'immediate'].forEach((name) => {
        name = 'infinite-scroll-' + name;
        value = sourceElem.getAttribute(name);
        if (value !== null) {
            targetElem.setAttribute(name, value);
        }
    });

    // fix: windows/chrome 的 scrollTop + clientHeight 与 scrollHeight 不一致的 BUG
    const name = 'infinite-scroll-distance';
    value = sourceElem.getAttribute(name);
    targetElem.setAttribute(name, value < 1 ? 1 : value);
}
