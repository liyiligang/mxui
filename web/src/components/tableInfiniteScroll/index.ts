// directive
import elTableInfiniteScroll from './tableInfiniteScroll';

// Vue.use()
elTableInfiniteScroll.install = (Vue) => {
    Vue.directive('elTableInfiniteScroll', elTableInfiniteScroll);
};

// Vue.component()
export default elTableInfiniteScroll;