import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Card from "./Cards"

ReactDom.render(
  <>
  <div>
    <h1>Hotstar Top Movies List</h1>
  </div>
  <div className="Cards">
<Card className="card1"
 imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3535/1013535-v-0619a0baddc3"
title="A Hotstar orignal Movies"
link="https://www.hotstar.com/in/tv/target/1260056953"
/>

<Card className="card2"

imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3085/723085-v"
title="A Hotstar orignal Movies"
link="https://www.hotstar.com/in/movies/dil-bechara/1260036017"/>
<Card className="card3"

imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"
title="A Hotstar orignal Movies"
link="https://www.hotstar.com/in/movies/chhichhore/1260012713"/>
<Card className="card4"

imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v"
title="A Hotstar orignal Movies"
link="https://www.hotstar.com/in/movies/tanhaji/1260022117"/>


</div>

<div className="second-card">
<Card className="card4"

imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6699/1026699-v-cb786ee970de"
title="A Hotstar orignal Movies"
link="https://www.hotstar.com/in/movies/angrezi-medium/1260024321"/>
<Card className="card4"

imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v"
title="A Hotstar orignal Movies"
link="https://www.hotstar.com/in/movies/total-dhamaal/1000233697"/>
<Card className="card4"

imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5462/245462-v"
title="A Hotstar orignal Movies"
link="https://www.hotstar.com/in/movies/baaghi-2/1000213089"/>
<Card className="card4"

imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9649/959649-v"
title="A Hotstar orignal Movies"
link="https://www.hotstar.com/in/movies/the-big-bull/1260036203"/>

</div>
  </>,

document.getElementById("root")
);
