export const getHeaderParts = () => {
  const partsItem = {
    parts_no: 1,
    contentArea: "sysHeader",
    partsType: "funcText",
    partsId: "sysFuncText",
    apiParameters: [
      { "parts_no": "1" },
    ],
    display_mobile: '',
    display_tablet: '',
    display_pc: '',
    className: "header",
    styleName: "",
    sysAccordion: '',
    sysAccordionInitialHide: '',
    sysLazyload: '',
    rendered: '',

    parts: {
      parts_no: 1,
      owner_no: 2,
      parts_name: "top_header",
      style_no: "",
      parts_type: "funcText",
      category_no: null,
      published_at: null,
      unpublished_at: null,
      headline_text: "",
      headline_element: "div",
      headline_image: "",
      accordion_use_flag: 0,
      accordion_initial_display: 0,
      use_lazyload_flag: 0,
      deleted_at: null,
      contents_html: `<div class="g_navi">
  <ul>
    <li><a href="<#サイトURL>shopping-guide">お買物ガイド</a></li>
    <li><a href="<#SSLルートURL>member/">会員登録</a></li>
    <li><a href="<#SSLルートURL>mypage/">マイページ</a></li>
  </ul>
</div><style>
                            .g_navi {
                                font-size: 2rem !import;
                            }
                        </style>`,
    },
  }
  return partsItem
}


export const getFooterParts = () => {
}