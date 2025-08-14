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
  __name: "question",
  setup(__props) {
    const detail = common_vendor.ref({
      title: "系统公告",
      author: "管理员",
      publish_date: Date.now(),
      content: `
			<p><strong>一.壁纸是否可以免费下载使用？</strong></p>
			<p>所有图片均可免费下载，但是图片版权属于上传者或者图片来源作者，下载后仅可自己欣赏或个人使用，不能用作商业用途。</p><br>
			<p><strong>二.下载壁纸提示请求频繁？</strong></p>
			<p>同一张壁纸，不能重复下载，防止有些用户误操作，重复对一张图片下载而浪费你的存储空间，也是为了防止被恶意频繁请求。</p><br>
			<p><strong>三.进入图片预览后，大图无法展现？</strong></p>
			<p>有时壁纸会比较大，收到服务器带宽及你的网络环境影响，有时间加载会比较慢，需要用户耐心等待，或者返回上一层后重新进入再查看。</p><br>
			<p><strong>四.如果你觉得图片侵权了？</strong></p>
			<p>图片来自于网络，由用户自行上传，所有监管不能及时，如果被侵权了，请提供侵权证据，反馈给管理员QQ:513894357.进行删除。</p>
			`
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83862aec"]]);
wx.createPage(MiniProgramPage);
