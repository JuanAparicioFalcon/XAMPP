import{newSpecPage}from"@stencil/core/testing";import{PrestoYoutubeSubscribeButton}from"../presto-youtube-subscribe-button";describe("presto-youtube-subscribe-button",(()=>{it("renders",(async()=>{const t=await newSpecPage({components:[PrestoYoutubeSubscribeButton],html:"<presto-youtube-subscribe-button></presto-youtube-subscribe-button>"});expect(t.root).toEqualHtml('\n      <presto-youtube-subscribe-button>\n        <div class="g-ytsubscribe"></div>\n      </presto-youtube-subscribe-button>\n    ')}))}));