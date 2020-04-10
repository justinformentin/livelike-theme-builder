function setup() {
  var rand = function() {
      return Math.floor(Math.random() * 1000) + 1;
    },
    text = "This is a test text",
    title = "This is a test title",
    img1 =
      "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
    img2 = "https://png.pngtree.com/svg/20161028/happy__949451.png",
    img3 = "http://simpleicon.com/wp-content/uploads/sad.png",
    question = "This is a test question?",
    desc1 = "Test Description 1",
    desc2 = "Test Description 2",
    confirmation_message = "This is a test confirmation message",
    i1 = { id: rand(), image_url: img2 },
    i2 = { id: rand(), image_url: img3 },
    db1 = { id: rand(), description: desc1, is_correct: true },
    db2 = { id: rand(), description: desc2, is_correct: false },
    di1 = { id: rand(), description: desc1, image_url: img2 },
    di2 = { id: rand(), description: desc2, image_url: img3 },
    dib1 = {
      id: rand(),
      description: desc1,
      is_correct: true,
      image_url: img2
    },
    dib2 = {
      id: rand(),
      description: desc2,
      is_correct: false,
      image_url: img3
    };

  var aa1 = document.createElement("livelike-alert");
  aa1.id = rand();
  aa1.title = title;
  aa1.text = text;

  var aa2 = document.createElement("livelike-alert");
  aa2.id = rand();
  aa2.title = title;
  aa2.image_url = img1;

  var aa3 = document.createElement("livelike-alert");
  aa3.id = rand();
  aa3.title = title;
  aa3.text = text;
  aa3.image_url = img1;

  var aa4 = document.createElement("livelike-alert");
  aa4.id = rand();
  aa4.text = text;
  aa4.title = title;
  aa4.link_url = "https://livelike.com/";
  aa4.link_label = "External link";
  aa4.image_url = img1;

  var tp = document.createElement("livelike-text-poll");
  tp.id = rand();
  tp.question = question;
  tp.options = [
    { id: rand(), description: desc1 },
    { id: rand(), description: desc2 }
  ];

  var ip = document.createElement("livelike-image-poll");
  ip.id = rand();
  ip.question = question;
  ip.options = [di1, di2];

  var tq = document.createElement("livelike-text-quiz");
  tq.id = rand();
  tq.question = question;
  tq.choices = [db1, db2];

  var iq = document.createElement("livelike-image-quiz");
  iq.id = rand();
  iq.question = question;
  iq.choices = [dib1, dib2];

  var tpred = document.createElement("livelike-text-prediction");
  tpred.id = rand();
  tpred.question = question;
  tpred.confirmation_message = confirmation_message;
  tpred.options = [db1, db2];

  var tpredfu = document.createElement("livelike-text-prediction-follow-up");
  tpredfu.id = rand();
  tpredfu.question = question;
  tpredfu.options = [db1, db2];

  var ipred = document.createElement("livelike-image-prediction");
  ipred.id = rand();
  ipred.question = question;
  ipred.confirmation_message = confirmation_message;
  ipred.options = [dib1, dib2];

  var ipredfu = document.createElement("livelike-image-prediction-follow-up");
  ipredfu.id = rand();
  ipredfu.question = question;
  ipredfu.options = [dib1, dib2];

  var es = document.createElement("livelike-emoji-slider");
  es.id = rand();
  es.question = question;
  es.initial_magnitude =
    Math.floor(Math.random() * (999 - 100 + 1) + 100) / 1000;
  es.options = [i1, i2];

  var cm = document.createElement("livelike-cheer-meter");
  cm.id = rand();
  cm.question = "MINIGAME - PICK A SIDE!";
  cm.cheer_type = "tap";
  cm.options = [dib1, dib2];

  var rp = document.createElement("livelike-rich-post");
  rp.id = rand();
  rp.content =
    "<p>This is a test</p>\n<p><strong>This is a test</strong><strong>&nbsp;</strong></p>\n<p><em>This is a test</em><em>&nbsp;</em></p>";

  var se = document.createElement("livelike-social-embed");
  se.id = rand();
  se.comment = "Test Social Embed";
  se.items = [
    {
      id: "6f44d011-c49b-493d-86d2-70fa5d400855",
      url: "https://www.facebook.com/9gag/posts/10156278718151840",
      oembed: {
        author_name: "9GAG",
        author_url: "https://www.facebook.com/9gag/",
        provider_url: "https://www.facebook.com",
        provider_name: "Facebook",
        success: true,
        height: null,
        html:
          '<div id="fb-root"></div>\n<script async="1" defer="1" crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v6.0"></script><div class="fb-post" data-href="https://www.facebook.com/9gag/posts/10156278718151840" data-width="552"><blockquote cite="https://www.facebook.com/9gag/posts/10156278718151840" class="fb-xfbml-parse-ignore"><p>Hold my beer! I&#039;m gonna try it!</p>Posted by <a href="https://www.facebook.com/9gag/">9GAG</a> on&nbsp;<a href="https://www.facebook.com/9gag/posts/10156278718151840">Monday, October 2, 2017</a></blockquote></div>',
        type: "rich",
        version: "1.0",
        url: "https://www.facebook.com/9gag/posts/10156278718151840",
        width: 552,
        title: "https://www.facebook.com/9gag/posts/10156278718151840"
      }
    },
    {
      id: "bca7b0ae-d874-4a03-907a-3872c30b201b",
      url: "https://vimeo.com/212603149",
      oembed: {
        type: "video",
        version: "1.0",
        provider_name: "Vimeo",
        provider_url: "https://vimeo.com/",
        title: "Mami Wata | Woza",
        author_name: "Mami Wata",
        author_url: "https://vimeo.com/user64645507",
        is_plus: "0",
        account_type: "pro",
        html:
          '<iframe src="https://player.vimeo.com/video/212603149?app_id=122963" width="426" height="222" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="Mami Wata | Woza"></iframe>',
        width: 426,
        height: 222,
        duration: 313,
        description:
          '“Woza” ("Come" in Zulu)  tells the story of an African surfer who has been taken as a lover by the African water spirit Mami Wata.  It features 22 year-old Transkei surfer, Avuyile Ndamase.\n\nBronze Lion for Direction in Craft\nSilver at Young Director Award\nBest Cinematography at Patagonia Film Festival LA\n\nClient: Mami Wata\nAgency: Mami Wata in-house\nCreative Director & Art Director: Peet Pienaar\nCopywriters: Peet Pienaar, Nick Dutton, Andy Davis\n\nShot and directed by Pantera\nProduction company: Pantera&Co (Buenos Aires)\nProducer: Manu Aguer\nMusic Composer / Sound Design: Vittorio Giampietro\nColor Grading: Oisin O’Driscoll @ The Mill (London)\nUnderwater Camera Op: Calvin Thompson\nTalent: Avuyile Ndamase, Holly Armstrong\n\nSpecial thanks:\nJaco Bouwer\nSamora Chapman\nMaximo Bustillo\nStefan Naude\nAlex Morrison\nLinda (security)\n\n\nFeaturing Music by BCUC (Soweto) “Asazani”',
        thumbnail_url: "https://i.vimeocdn.com/video/644593489_295x166.jpg",
        thumbnail_width: 295,
        thumbnail_height: 154,
        thumbnail_url_with_play_button:
          "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F644593489_295x166.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
        upload_date: "2017-04-10 11:36:27",
        video_id: 212603149,
        uri: "/videos/212603149",
        url: "https://vimeo.com/212603149"
      }
    },
    {
      id: "dd1af235-f753-43be-b272-f034b8de8e89",
      url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
      oembed: {
        width: 480,
        version: "1.0",
        author_name: "Ed Sheeran",
        thumbnail_height: 360,
        provider_name: "YouTube",
        thumbnail_width: 480,
        thumbnail_url: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg",
        title: "Ed Sheeran - Shape of You [Official Video]",
        height: 270,
        html:
          '<iframe width="480" height="270" src="https://www.youtube.com/embed/JGwWNGJdvx8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        provider_url: "https://www.youtube.com/",
        type: "video",
        author_url: "https://www.youtube.com/user/EdSheeran",
        url: "https://www.youtube.com/watch?v=JGwWNGJdvx8"
      }
    },
    {
      id: "2403f205-4045-459f-abd4-42730e6b01f2",
      url: "https://www.instagram.com/p/BJA9BB-B46A",
      oembed: {
        version: "1.0",
        title:
          "don't miss @thierryneuville @ Rally Germany 🇩🇪! #wrc @adacrallyehub @hmsgofficial 📸 (2015): @jaanusree / Red Bull Contentpool",
        author_name: "officialwrc",
        author_url: "https://www.instagram.com/officialwrc",
        author_id: 298139036,
        media_id: "1315319442863263360_298139036",
        provider_name: "Instagram",
        provider_url: "https://www.instagram.com",
        type: "rich",
        width: 658,
        height: null,
        html:
          '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BJA9BB-B46A/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/BJA9BB-B46A/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BJA9BB-B46A/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">don&#39;t miss @thierryneuville @ Rally Germany 🇩🇪! #wrc @adacrallyehub @hmsgofficial 📸 (2015): @jaanusree / Red Bull Contentpool</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/officialwrc/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> World Rally Championship - WRC</a> (@officialwrc) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-08-12T16:11:58+00:00">Aug 12, 2016 at 9:11am PDT</time></p></div></blockquote>\n<script async src="//www.instagram.com/embed.js"></script>',
        thumbnail_url:
          "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/13722180_925993327523826_480484396_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=rsgNm7s3870AX-DKT8F&oh=9b8a96fccf2750b92a292963850b1de7&oe=5EA47E7F",
        thumbnail_width: 640,
        thumbnail_height: 548,
        url: "https://www.instagram.com/p/BJA9BB-B46A"
      }
    },
    {
      id: "ea6532de-70b0-49c6-b7ae-cf4f668019e7",
      url:
        "https://twitter.com/markdalgleish/status/1210105309844267008?ref_src=twsrc%5Etfw",
      oembed: {
        url: "https://twitter.com/markdalgleish/status/1210105309844267008",
        author_name: "Mark Dalgleish",
        author_url: "https://twitter.com/markdalgleish",
        html:
          '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">When someone says they use PostCSS. <a href="https://t.co/0jlvE0eUeJ">pic.twitter.com/0jlvE0eUeJ</a></p>&mdash; Mark Dalgleish (@markdalgleish) <a href="https://twitter.com/markdalgleish/status/1210105309844267008?ref_src=twsrc%5Etfw">December 26, 2019</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n',
        width: 550,
        height: null,
        type: "rich",
        cache_age: "3153600000",
        provider_name: "Twitter",
        provider_url: "https://twitter.com",
        version: "1.0",
        title: "https://twitter.com/markdalgleish/status/1210105309844267008"
      }
    }
  ];

  var widgets = [
    { el: aa1, name: "Alert Widget One" },
    { el: aa2, name: "Alert Widget Two" },
    { el: aa3, name: "Alert Widget Three" },
    { el: aa4, name: "Alert Widget Four" },
    { el: tp, name: "Text Poll Widget" },
    { el: ip, name: "Image Poll Widget" },
    { el: tq, name: "Text Quiz Widget" },
    { el: iq, name: "Image Quiz Widget" },
    { el: tpred, name: "Text Prediction Widget" },
    { el: tpredfu, name: "Text Prediction Follow Up Widget" },
    { el: ipred, name: "Image Prediction Widget" },
    { el: ipredfu, name: "Image Prediction Follow Up Widget" },
    { el: es, name: "Emoji Slider Widget" },
    { el: se, name: "Social Embed Widget" },
    { el: cm, name: "Cheer Meter Widget" },
    { el: rp, name: "Rich Post Widget" }
  ];
  var container = document.createElement("div");
  container.setAttribute("id", "widget-container");

  widgets.forEach(function(v) {
    var d = document.createElement("div");
    d.setAttribute("class", "widget-container");
    var p = document.createElement("p");
    p.setAttribute("class", "title");
    p.innerText = v.name;
    d.append(p);
    d.append(v.el);
    container.append(d);
  });
  attachStyle(container);
}

function attachStyle(container) {
  var w = document.querySelector("livelike-widgets"),
    s = document.createElement("style");
  s.type = "text/css";
  var style =
    ".widget-container { display: flex; flex-direction: column; } .title {color: white; text-align: center; font-size: 1.25rem;}";
  if (!!(window.attachEvent && !window.opera)) {
    s.styleSheet.cssText = style;
  } else {
    var styleText = document.createTextNode(style);
    s.appendChild(styleText);
  }
  w.append(s);
  attachContainer(w, container);
}

function attachContainer(w, container) {
  w.append(container);
}

document.addEventListener("DOMContentLoaded", function() {
  setup();
});

var m = `<section id="widget-section"></section>`;

var mm = `<section id="widget-section">
    <div class="container">
      <div class="controls-container">
        <div class="input-container">
          <label for="a1headerBackground">Header Color Background</label>
          <input id="a1headerBackground" />
        </div>
        <div class="input-container">
          <label for="a1headerColor">Header Text Color</label>
          <input id="a1headerColor" />
        </div>
      </div>

      <div id="alert1" class="widget-container">
        <p class="title">Alert Widget One</p>
      </div>

    </div>

    <div id="alert2" class="widget-container">
      <p class="title">Alert Widget Two</p>
    </div>

    <div id="alert3" class="widget-container">
      <p class="title">Alert Widget Three</p>
    </div>

    <div id="alert4" class="widget-container">
      <p class="title">Alert Widget Four</p>
    </div>

    <div id="textpoll" class="widget-container">
      <p class="title">Text Poll Widget</p>
    </div>
    <div id="imagepoll" class="widget-container">
      <p class="title">Image Poll Widget</p>
    </div>
    <div id="textquiz" class="widget-container">
      <p class="title">Text Quiz Widget</p>
    </div>
    <div id="imagequiz" class="widget-container">
      <p class="title">Image Quiz Widget</p>
    </div>
    <div id="textpred" class="widget-container">
      <p class="title">Text Prediction Widget</p>
    </div>
    <div id="textpredfu" class="widget-container">
      <p class="title">Text Prediction Follow Up Widget</p>
    </div>
    <div id="imagepred" class="widget-container">
      <p class="title">Image Prediction Widget</p>
    </div>
    <div id="imagepredfu" class="widget-container">
      <p class="title">Image Prediction Follow Up Widget</p>
    </div>
    <div id="emojislider" class="widget-container">
      <p class="title">Emoji Slider Widget</p>
    </div>
    <div id="socialembed" class="widget-container">
      <p class="title">Social Embed Widget</p>
    </div>
    <div id="cheermeter" class="widget-container">
      <p class="title">Cheer Meter Widget</p>
    </div>
    <div id="richpost" class="widget-container">
      <p class="title">Rich Post Widget</p>
    </div>
  </section>
`;
