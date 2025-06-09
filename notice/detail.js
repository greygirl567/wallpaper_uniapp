"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  (_easycom_uni_tag2 + _easycom_uni_dateformat2 + _easycom_mp_html2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_dateformat + _easycom_mp_html)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const detail = common_vendor.ref({
      title: "系统公告",
      author: "管理员",
      publish_date: Date.now(),
      content: `
			<p>所有图片均采集于互联网，在壁纸信息中，均设置了图片来源。
			   此壁纸项目，用于学习交流，非商业使用，图片来自于用户上传，
			   如果对您的图片造成了侵权，请联系作者QQ:513894357，
			   请提供侵权证据，以便管理员对侵权图片进行删除，
			   出于学习交流目的非商用，对您产生的损失请谅解。</p>`
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          inverted: true,
          text: "置顶",
          type: "error"
        }),
        b: common_vendor.p({
          date: Date.now(),
          format: "yyyy-MM-dd hh:mm:ss"
        }),
        c: common_vendor.p({
          content: detail.value.content
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f737f11"]]);
wx.createPage(MiniProgramPage);
