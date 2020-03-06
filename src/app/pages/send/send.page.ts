import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import * as AudioNetwork from 'audio-network';
// import * as quiet from 'quietjs-bundle'

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
  public medium: string;

  constructor(private nav: NavService, private popoverController: PopoverController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.popoverController.dismiss();
    this.medium = this.activatedRoute.snapshot.paramMap.get('id');

    // quiet.addReadyCallback(() => {
    //   quiet.receiver({ profile: 'ultrasonic-experimental', onReceive: console.log });
    // });
  }

  

  


physicalLayer; transmitAdapter; receiveAdapter;

onLoad() {
    var channel = [ { baseFrequency: 1070 } ];

    this.physicalLayer = new AudioNetwork.
    PhysicalLayer.PhysicalLayer({
        tx: { channel: channel },
        rx: { channel: channel }
    });
    this.transmitAdapter = new AudioNetwork.PhysicalLayerAdapter.TransmitAdapter(this.physicalLayer);
    this.receiveAdapter = new AudioNetwork.PhysicalLayerAdapter.ReceiveAdapter(this.physicalLayer);

    this.physicalLayer.rx(function (channelIndex, carrierDetail, time) {
        var receiveData = this.receiveAdapter.receive(channelIndex, carrierDetail, time);
        document.getElementById('rx-state').innerHTML = receiveData.state;
    });

    this.receiveAdapter.setPacketReceiveHandler(this.packetReceiveHandler);
}

 packetReceiveHandler(channelIndex, data) {
    var rxPacket;

    rxPacket = document.getElementById('rx-packet');
    rxPacket.value = data.join(' ') + '\n' + rxPacket.value;
}

 sendPacket() {
    var dataList, symbol, i, data;

    data = [];
    dataList = (document.getElementById('tx-packet').value + '').split(' ');
    for (i = 0; i < dataList.length; i++) {
        symbol = parseInt(dataList[i]) % 2;
        data.push(symbol);
    }

    this.transmitAdapter.packet(0, data);
}

reset() {
    this.receiveAdapter.reset(0);
    document.getElementById('rx-packet').value = '';
}

sync() {
    console.log("akakakak")
    this.transmitAdapter.synchronization(0);
}

}
