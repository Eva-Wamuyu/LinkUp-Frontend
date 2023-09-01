import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css',
  '../home/home.component.css']
})
export class FollowingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
following =  [{"username":"kjimmison0","profile_img":"http://dummyimage.com/118x100.png/ff4444/ffffff","last_name":"Jimmison","email":"sjimmison0@ihg.com","gender":"Female","ip_address":"165.95.103.45"},
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
  {"username":"rtreacye","profile_img":"http://dummyimage.com/184x100.png/dddddd/000000","last_name":"Treacy","email":"atreacye@house.gov","gender":"Male","ip_address":"91.112.118.192"},
  {"username":"wduchesnef","profile_img":"http://dummyimage.com/160x100.png/ff4444/ffffff","last_name":"Duchesne","email":"gduchesnef@usnews.com","gender":"Male","ip_address":"186.175.97.63"},
  {"username":"blyptradeg","profile_img":"http://dummyimage.com/118x100.png/dddddd/000000","last_name":"Lyptrade","email":"dlyptradeg@unicef.org","gender":"Male","ip_address":"163.139.95.65"},
  {"username":"fhindenbergerh","profile_img":"http://dummyimage.com/135x100.png/cc0000/ffffff","last_name":"Hindenberger","email":"chindenbergerh@apache.org","gender":"Male","ip_address":"181.176.245.69"},
  {"username":"aiuorioi","profile_img":"http://dummyimage.com/193x100.png/cc0000/ffffff","last_name":"Iuorio","email":"eiuorioi@tripod.com","gender":"Bigender","ip_address":"13.99.32.172"},
  {"username":"crosenstengelj","profile_img":"http://dummyimage.com/171x100.png/ff4444/ffffff","last_name":"Rosenstengel","email":"erosenstengelj@accuweather.com","gender":"Male","ip_address":"51.171.46.231"},
  {"username":"kjewettk","profile_img":"http://dummyimage.com/143x100.png/cc0000/ffffff","last_name":"Jewett","email":"yjewettk@wsj.com","gender":"Female","ip_address":"182.163.145.18"},
  {"username":"sstiegarsl","profile_img":"http://dummyimage.com/245x100.png/ff4444/ffffff","last_name":"Stiegars","email":"sstiegarsl@google.it","gender":"Female","ip_address":"37.130.240.48"},
  {"username":"bemerinem","profile_img":"http://dummyimage.com/248x100.png/5fa2dd/ffffff","last_name":"Emerine","email":"wemerinem@odnoklassniki.ru","gender":"Female","ip_address":"12.165.136.52"},
  {"username":"bspiersn","profile_img":"http://dummyimage.com/162x100.png/5fa2dd/ffffff","last_name":"Spiers","email":"jspiersn@sbwire.com","gender":"Female","ip_address":"234.137.50.71"},
  {"username":"afewo","profile_img":"http://dummyimage.com/161x100.png/dddddd/000000","last_name":"Few","email":"jfewo@wisc.edu","gender":"Female","ip_address":"247.5.95.216"},
  {"username":"sgoldenp","profile_img":"http://dummyimage.com/119x100.png/ff4444/ffffff","last_name":"Golden","email":"wgoldenp@slate.com","gender":"Polygender","ip_address":"99.216.213.106"},
  {"username":"oeusticeq","profile_img":"http://dummyimage.com/221x100.png/dddddd/000000","last_name":"Eustice","email":"peusticeq@w3.org","gender":"Female","ip_address":"62.81.3.62"},
  {"username":"dgorellir","profile_img":"http://dummyimage.com/235x100.png/5fa2dd/ffffff","last_name":"Gorelli","email":"sgorellir@mapquest.com","gender":"Female","ip_address":"2.168.20.113"},
  {"username":"mdacostas","profile_img":"http://dummyimage.com/160x100.png/cc0000/ffffff","last_name":"Da Costa","email":"bdacostas@cocolog-nifty.com","gender":"Female","ip_address":"2.108.70.92"},
  {"username":"btownt","profile_img":"http://dummyimage.com/183x100.png/dddddd/000000","last_name":"Town","email":"ntownt@admin.ch","gender":"Male","ip_address":"214.184.54.223"},
  {"username":"dsimeceku","profile_img":"http://dummyimage.com/151x100.png/cc0000/ffffff","last_name":"Simecek","email":"tsimeceku@elegantthemes.com","gender":"Female","ip_address":"191.90.144.74"},
  {"username":"aduthiev","profile_img":"http://dummyimage.com/235x100.png/dddddd/000000","last_name":"Duthie","email":"rduthiev@tmall.com","gender":"Genderqueer","ip_address":"126.181.237.164"},
  {"username":"clanceterw","profile_img":"http://dummyimage.com/132x100.png/5fa2dd/ffffff","last_name":"Lanceter","email":"jlanceterw@spiegel.de","gender":"Male","ip_address":"33.79.2.162"},
  {"username":"apickx","profile_img":"http://dummyimage.com/164x100.png/dddddd/000000","last_name":"Pick","email":"lpickx@macromedia.com","gender":"Male","ip_address":"32.234.45.159"},
  {"username":"aoadesy","profile_img":"http://dummyimage.com/153x100.png/dddddd/000000","last_name":"Oades","email":"loadesy@indiegogo.com","gender":"Male","ip_address":"255.253.199.48"},
  {"username":"gcablez","profile_img":"http://dummyimage.com/109x100.png/dddddd/000000","last_name":"Cable","email":"wcablez@ocn.ne.jp","gender":"Female","ip_address":"103.142.126.75"},
  {"username":"rsquier10","profile_img":"http://dummyimage.com/226x100.png/ff4444/ffffff","last_name":"Squier","email":"vsquier10@cnet.com","gender":"Male","ip_address":"77.198.171.172"},
  {"username":"asedgeman11","profile_img":"http://dummyimage.com/113x100.png/ff4444/ffffff","last_name":"Sedgeman","email":"psedgeman11@timesonline.co.uk","gender":"Male","ip_address":"144.167.241.88"},
  {"username":"mstoner12","profile_img":"http://dummyimage.com/127x100.png/cc0000/ffffff","last_name":"Stoner","email":"kstoner12@stumbleupon.com","gender":"Male","ip_address":"94.240.98.207"},
  {"username":"rmonahan13","profile_img":"http://dummyimage.com/131x100.png/ff4444/ffffff","last_name":"Monahan","email":"omonahan13@amazon.co.jp","gender":"Male","ip_address":"145.2.155.126"},
  {"username":"kioannidis14","profile_img":"http://dummyimage.com/183x100.png/dddddd/000000","last_name":"Ioannidis","email":"nioannidis14@dyndns.org","gender":"Female","ip_address":"178.118.194.45"},
  {"username":"nmcorkil15","profile_img":"http://dummyimage.com/232x100.png/dddddd/000000","last_name":"McOrkil","email":"dmcorkil15@livejournal.com","gender":"Female","ip_address":"49.216.13.89"},
  {"username":"cseth16","profile_img":"http://dummyimage.com/207x100.png/cc0000/ffffff","last_name":"Seth","email":"bseth16@mit.edu","gender":"Female","ip_address":"31.27.20.173"},
  {"username":"mtuppeny17","profile_img":"http://dummyimage.com/243x100.png/5fa2dd/ffffff","last_name":"Tuppeny","email":"ltuppeny17@4shared.com","gender":"Male","ip_address":"171.46.23.54"},
  {"username":"afrowd18","profile_img":"http://dummyimage.com/130x100.png/ff4444/ffffff","last_name":"Frowd","email":"afrowd18@clickbank.net","gender":"Male","ip_address":"113.173.104.236"},
  {"username":"avivien19","profile_img":"http://dummyimage.com/141x100.png/dddddd/000000","last_name":"Vivien","email":"cvivien19@dailymail.co.uk","gender":"Female","ip_address":"3.58.105.34"},
  {"username":"vdanahar1a","profile_img":"http://dummyimage.com/247x100.png/cc0000/ffffff","last_name":"Danahar","email":"adanahar1a@bloglovin.com","gender":"Female","ip_address":"114.165.182.175"},
  {"username":"lcleever1b","profile_img":"http://dummyimage.com/128x100.png/ff4444/ffffff","last_name":"Cleever","email":"bcleever1b@discovery.com","gender":"Genderqueer","ip_address":"246.25.197.15"},
  {"username":"jleupoldt1c","profile_img":"http://dummyimage.com/193x100.png/dddddd/000000","last_name":"Leupoldt","email":"tleupoldt1c@nationalgeographic.com","gender":"Male","ip_address":"233.62.11.115"},
  {"username":"agrisley1d","profile_img":"http://dummyimage.com/231x100.png/5fa2dd/ffffff","last_name":"Grisley","email":"pgrisley1d@slate.com","gender":"Male","ip_address":"252.126.169.144"}];

  ngOnInit(): void {
    let route_type = this.route.snapshot.paramMap.get('route_type') || "";
    console.log(route_type);

  }



}
