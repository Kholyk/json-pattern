// @flow

import format from '../src/format';

const test2 = [{"pr_0":"69,730.33","sku":"550014293","warehouse":"msk","manufacturer":"SHELL","name":"ATF 134 209L","quantity":"100.00","pr_3":"66,409.84","pr_2":"68,402.13","pr_1":"67,073.93"},{"pr_0":"83,792.61","sku":"550023517","warehouse":"msk","manufacturer":"SHELL","name":"ATF 134 FE 209L","quantity":"100.00","pr_3":"79,802.49","pr_2":"82,196.56","pr_1":"80,600.51"}];

test('format', () => {
  expect(format(test2)).toBe('{"550014293_msk":{"pr_0":"69,730.33","sku":"550014293","warehouse":"msk","manufacturer":"SHELL","name":"ATF 134 209L","quantity":"100.00","pr_3":"66,409.84","pr_2":"68,402.13","pr_1":"67,073.93"},"550023517_msk":{"pr_0":"83,792.61","sku":"550023517","warehouse":"msk","manufacturer":"SHELL","name":"ATF 134 FE 209L","quantity":"100.00","pr_3":"79,802.49","pr_2":"82,196.56","pr_1":"80,600.51"}}');
});
