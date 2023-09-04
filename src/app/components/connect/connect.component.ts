import { Component } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css','../home/home.component.css']
})
export class ConnectComponent {

  users =  [{"username":"kjimmison0","profile_img":"http://dummyimage.com/118x100.png/ff4444/ffffff","last_name":"Jimmison","email":"sjimmison0@ihg.com","gender":"Female","ip_address":"165.95.103.45"},
  {"username":"ccrosgrove1","profile_img":"http://dummyimage.com/233x100.png/ff4444/ffffff","last_name":"Crosgrove","email":"jcrosgrove1@dropbox.com","gender":"Genderfluid","ip_address":"222.108.190.121"},
  {"username":"hupcott2","profile_img":"http://dummyimage.com/139x100.png/5fa2dd/ffffff","last_name":"Upcott","email":"lupcott2@e-recht24.de","gender":"Male","ip_address":"62.80.6.202"},
  {"username":"djozefowicz3","profile_img":"http://dummyimage.com/149x100.png/cc0000/ffffff","last_name":"Jozefowicz","email":"rjozefowicz3@joomla.org","gender":"Bigender","ip_address":"34.108.98.181"},
  {"username":"ksmiths4","profile_img":"http://dummyimage.com/191x100.png/cc0000/ffffff","last_name":"Smiths","email":"msmiths4@wisc.edu","gender":"Female","ip_address":"24.201.97.106"},
  {"username":"sgori5","profile_img":"http://dummyimage.com/247x100.png/dddddd/000000","last_name":"Gori","email":"bgori5@marketwatch.com","gender":"Female","ip_address":"10.143.76.175"},
  {"username":"gplewright6","profile_img":"http://dummyimage.com/152x100.png/5fa2dd/ffffff","last_name":"Plewright","email":"bplewright6@mapquest.com","gender":"Male","ip_address":"109.35.52.255"},
  {"username":"fdanelet7","profile_img":"http://dummyimage.com/159x100.png/dddddd/000000","last_name":"Danelet","email":"ydanelet7@imdb.com","gender":"Female","ip_address":"137.15.152.242"},
  {"username":"ehovey8","profile_img":"http://dummyimage.com/217x100.png/cc0000/ffffff","last_name":"Hovey","email":"dhovey8@apache.org","gender":"Female","ip_address":"102.186.123.200"},
  {"username":"rsmiley9","profile_img":"http://dummyimage.com/137x100.png/5fa2dd/ffffff","last_name":"Smiley","email":"tsmiley9@google.co.jp","gender":"Female","ip_address":"14.20.26.255"},
  {"username":"jedlestona","profile_img":"http://dummyimage.com/249x100.png/ff4444/ffffff","last_name":"Edleston","email":"hedlestona@amazon.de","gender":"Female","ip_address":"83.9.0.163"},
  {"username":"lcullb","profile_img":"http://dummyimage.com/169x100.png/ff4444/ffffff","last_name":"Cull","email":"kcullb@reverbnation.com","gender":"Female","ip_address":"145.125.209.201"},
  {"username":"dpratchettc","profile_img":"http://dummyimage.com/108x100.png/cc0000/ffffff","last_name":"Pratchett","email":"gpratchettc@chron.com","gender":"Male","ip_address":"222.65.248.58"},
  {"username":"dlillemand","profile_img":"http://dummyimage.com/241x100.png/5fa2dd/ffffff","last_name":"Lilleman","email":"mlillemand@mit.edu","gender":"Male","ip_address":"52.165.72.115"},
  {"username":"rtreacye","profile_img":"http://dummyimage.com/184x100.png/dddddd/000000","last_name":"Treacy","email":"atreacye@house.gov","gender":"Male","ip_address":"91.112.118.192"}]

}
