import { Observable, Observer, Subject } from "rxjs";

this.data$ = Observable.of({
    "data": [
      {
        "firstname": "abc",
        "lastname": "aa"
      },
       {
        "firstname": "xyz",
        "lastname": "bb"
      }
    ]
  })  .map(res => res.data)
    .switchMap(dataArray => {
      return Observable.from(dataArray);
    })
    .map((arrayResp: any) => {
      return ( arrayResp.firstname);
    }).toArray()