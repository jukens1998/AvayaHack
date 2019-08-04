import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(public httpClient: HttpClient) { }
  ngOnInit() { }
  sendPostRequest() {
    const config = {

      headers: {
        'content-type': "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      },
      processData: false,
  contentType: false,
  mimeType: "multipart/form-data",
      data: payload
    }
    var payload = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"family\"\r\n\r\nincendio\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nalertaincendio\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"version\"\r\n\r\n1.0\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"eventBody\"\r\n\r\n{\"Calledparty\":\"2314\",\"Callingparty\":\"2304\"}\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--"
    this.httpClient.post('http://breeze2-194.collaboratory.avaya.com/services/EventingConnector/events',payload, config).subscribe(data => {
      //console.log(data['_body']);
    }, error => {
      console.log(error);
    });
  }

}
