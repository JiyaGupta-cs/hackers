import React from 'react'
import banner from './images/team_banner.png'

const Team = () => {
    // const banner = './images/team_banner';
  return (
    <div className='team'>
      <section className={`bg-black bg-cover bg-no-repeat h-screen flex flex-col justify-center items-center gap-8 `} style={{backgroundImage: `url(${banner})`}}>
       
    <div className="inline-block m-0 text-transparent bg-[url('https://s3-alpha-sig.figma.com/img/94e1/68cb/3a0c7f4b515c899c5550dc4331074056?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cGWCb4cdmGdNk5NfTsy~WmX7iTm-IhvP4PQeXzYOD5eXZiqAcx5Ub4ubIUbQDm2YhcD-rmZK-gLMv69TjhQoV~3bsHSFTGMPlWmnoXi4HAH5nU747R6mGI0~YultVPgiSfX1ag6~IE4hbMTq78V1OQwWIfBcd7K1HarZajFqPKICjti4KU4KQKQGHM34mntqqAc2fZy84-s8irlOZm3cwxHY4tR~ODFGYOSPwhAHfkQ5UVDOcFW6cOvIC8WnD2NrV09zm9cBSfk0lFLRtPIWm6e5uRiOpzXiNQenrgEeAGUFCXhWLJJcq9GaA~a9U3s3JntQ5nBYbtj~4pZNbtNAEA__')] bg-cover bg-no-repeat bg-center bg-clip-text">
  <h1 className="text-9xl font-['inter var'] " style={{ WebkitTextStroke: '1px white' }}>OUR TEAM</h1>  
</div>
<h2 className='text-white font-semibold font-["inter var"]'>The people Who Work Day and Night To Make It Possible!!</h2>

      </section>
      
      <section className='bg-black flex flex-col items-center justify-center gap-12 py-12'>
<div className='flex flex-col items-center justify-center gap-6'>
    <h3 className='text-red-600 text-2xl font-bold'>Faculty Co-ordinator</h3>
    <div className="cards flex gap-10">
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/b9bd/11e7/824ddf89e7d48e93d4f689f21eecad09?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NugskZSnBC3AXwPOU9yAXJfv8IuIZgVQjwtKfZCNltqijrZJSnX3MHZ230Il7RNPzCGQkj~q7shd4WxLjduEQmcomhuXwhOdZ6SVPdeVnbM5JNd~3Jb8cRiHd6jBCOBnl7O-j0av9japVi8IOb2Eap6-Lpaq5~MD1EOAMmCalCQuFptpvJ5kLhPDl7qPXJZJM5bQ05e5pXXR3VL6TyaS3k4geIh8ZCwjbJZxb0Wu2dB4Y7lhYv3nYYhPRctfdDlNr~RSIMMhDQOC4C5YHPu4jLle5VBoXy2pwDmVYnI5UUk9Gegr470yn33jea-ihEgceH9K4J50VBN6FKQyoelhtw__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Dr Abhinav Juneja</p>
    </div>
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/3e57/1159/0f7d7ec6f79dbc412edf83b30533a12b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ntcVWe4aqRfZWvBSN~PaK6R7XoDLq22s8jSsn~UG6szf6yWVHFai8qUqnPx8QA9yr3d5J4K26lySiInFonIoFYzOT5T0SI-KYZOafdPnTv696gi9OSxhsBuE~iqddL868o80lpXWBlR4niNg0M0Ew8ahLARWj21iwuFioN0TnwpqwgLpgx9w4S1mKvfdGhIhmahzM5CwLtTBqHpfncCoNJcFn5RJzS7XbeYP9S3hY0bSWQdguYOxkyYZk5LfP0DPGGDZkZa9Bfq0f~qNhIYbH-zbWu~cCBbzco1mZsa-Kt7ZEffhYTyJ2Q5v2EFxyVrt8a-ZFVdskxUOG6-Gp6Kvug__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Dr Rohit Vashisht</p>
    </div>
    </div>
    
</div>
<div className='flex flex-col items-center justify-center gap-6'>
    <h3 className='text-red-600 text-2xl font-bold'>Chapter Lead</h3>
    <div className="cards flex gap-10">
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/cdbe/329a/35314ca00eb93044df43a43c741ca89c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KZkAgu3MaiJDfyqqhkbwo1UNcffVoo4y5UWp6XV7I945Kq0gnu64aIZd0TLK5gwc9Fn2KL53ou7BWOr6mBlvqxxkpoP6wRGoeyJJkp0ao822FmAPiOrPyV1fEcV-jMcOvXMoFn6Z6lRDbntIXCXEyzgf7jIQlmwlE0vTPR17HcZgaFmN7MQrGK6kEbXMSFpzqjB92VicCpKEb3gC3jP88OHqEHTr8tmYLkfO5UKavrnGhAmiv7SxAfiJlZR4qPBFN2xQPIqEzVI-jBe4MfRpgptxguWJlZzIatWVf07NmN0H9mURQ8eVbkDmXAwibvN-87tGQiZKLdMU5CoK8XKKSw__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Harveer Narwar</p>
    </div>
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/35ab/7c94/0c4498b1da263eedd95fc70318584afd?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF13LeLEatPAQSayK3tcUT-cT7qTIcJS2t06L1qKb-olY-gtCFq9yeROs2JCVwZUkD4YzWmu~GoLepRWruQ0mWcu6mwxszhhQAF0AYIOJ~uHI4Yyq89veDOYo8TVCHXhSrkgZoWfONpWaYlw2op~wlSfvSN22Zk-PnLre8WvmHr6~vltV~BCkTQElT~5NU-09MHU7C-wcJw-kKAzhsESFbAv-dqGWebmmYo-wQju5pOcPwIPVd4uNlmSD57ZhfDr4vqpwS60B1GANw2asHYuT1Zo-UOcYcrNNEz8Pewbg1FNm1l~XVrHOKJApzYl0hKnfKa8~alvcs83v24vRRAp5Q__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Raj Pandey</p>
    </div>
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/261e/b5d1/acd8a13a52b70ad6b6db7e407ff678d6?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQL118DeJoBEz4feqe6dP7LDhK3c7-7fil5iRgbF16~GBXRxQmmn302OUU5hrZNZ3tS0JOvAW2dVrhdX9NLRO6cGghBiHhZdya7H5-HRik~Ko5CsiiI~cBfRLSt-WZIt1c9a5019GeP09eLgGG2PVseocj192v6qF~bvZDYDXyPIB3-~wOe4Z3rk4y~C9JzBGzVFjmmFgLYCb5KQP2H1GftD2YhCCSqzuPipS36Acsazw2Go4ye1OPEgXCWS5eg8vDi2ip0cQYUtga~MBltF8VFS~ufRQ7dgr0Pn-MZE5Z11nHgrAvN96-KUgCWmRgJrghwZGVW18ExBxePjj9QL9Q__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Ananya Srivastava</p>
    </div>
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/fad8/9a19/2593dae1531fa2ad62edecda50c14cce?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxnOAwyz6aemzKGs6KPMENHfMZwyle8gLPxMEE0lg6Qe1iDDjmX5saBPVuF3eVounvApbxMbE~8N4T544nW8YczFObcps1tGRW21F2~EjWdtqrcz5cuvs6S521olt5G1MB3CiC7ammQmAa3AfUvjBKapZtOryi0XULCezMTffxN7aaPhP6zOu7Q9bA-XfnIPndV5KnilkN7-UuEGYfxkFo83vjGUQpPSBeMGox-D~YmBwni7PL3g7kk5GSGQD9W~zK~GPB3jWhf~AuGwdOU7Pv2tOZE7et3JpgEHMkR9jFVezbWsSOG761c9HyhhGSPT5oke~8RSX3Fa~L64PeUiLg__" className='rounded-full w-48 h-48' alt="" />
        <p className='text-white text-xl font-bold'>Kartikey Mishra</p>
    </div>
    </div>
    
</div>
<div className="new flex gap-10">
<div className='flex flex-col items-center justify-center gap-6'>
    <h3 className='text-red-600 text-2xl font-bold'>PR Lead</h3>
    <div className="cards flex gap-10">
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/36ef/29b4/78d9ca10655d677c347222c7f31e2e62?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXFGsZzouNQux8BK279kjPl3aSZMvN70WH2gtSJAXxd~HENc2TqnNsRzqljZGMYLI~nOZESj4kmPrAhrnZXg75zeRLs4de4DKScCoor4NPBngZR~TPIUtJici~IWPWDCi60v6ZBZ0tbM3WMSLLWwaovfWG4NK61KVirbThzsLiJisQYSL0jl13sdvsAf5p-1LfCupMP1f1SvNBxiOyZCkhVC4dN1qVBPaW3rzN4BLirW05c5hW6RJUYCw4p0dr89biXA-9LlLbDaYcEdVTSNmg~AtTU~LQ7VJ2Kn9q7RQe8I3-iwM5ufzkJ9sar8ZlnGuGPfUSlXbM1PX0Xw9YFJzA__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Shreya Punani</p>
    </div>
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/305e/aee2/dbee5b1c133e2f55b4ea913533ec94e1?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KmTjN3GjJGRvUxJsghkxyFItdvqWAlEfcPss9d~9wZvL2~hSdl4YiC3JN9Xt0qKfY4rM~XBa9npNtDCP4r3AHvp-Q-03w1FGdYfhRi9aUgxrhviWZrnMqPOWXWxRMpHeSMXd~BIa-WYsIhawR1sm7lAILQSLG2IHNT6XipKHNBglPojeiw6qqQYRVyDeOgvR45~CGXdXinHvo2emS7d-vZ1QKmfgZnXnsM91iKACb7dfEj~0UkdQqOB5HOdaLKOlGfbb8o5Qad4RJlAqiB3HyVllUQni2bGx3f-bv13RrAbcaxP4Q4ABU~4e7BOPy9qnB22Gz4SZy-vWjFEkWd8P9A__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Aryan Sharma</p>
    </div>
    </div>
    
</div>
<div className='flex flex-col items-center justify-center gap-6'>
    <h3 className='text-red-600 text-2xl font-bold'>Faculty Co-ordinator</h3>
    <div className="cards flex gap-10">
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/2c44/c49e/babbace25126af20f2f1efdbeb844074?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ftMIZp43UfNZKPG7mILWz4cQZxGDK-L6XvBMK5QxCanEx~w8OjBRftJZes5gDLOAd8VGkDhDJSR~ISfaOtRnngBzQXIxsfnaSYItSdEVqzt6qXEC57S4lZJk7M0dXIoyiedXOPTRicpT6doLn~DWYD1ZC1pHIZvaR4Yl4sOHjUKXguf7g1WpFJCQIOuLVOFpMZhqwHpwbMSFOU2EMNEYxe-0pmPt-DH0YSh6Lhr7L1in154UK65M5eQuGuTYs37mN1BwjKsj0sla~MRuf6jo8MjltxTiZstbVkkCiZ~e4DbHqC2679HrNw0pUeOa3Wb9yoTQRf1t6g5yvUUpqdk6Sg__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Sahil Panwar</p>
    </div>
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/b135/6ab2/d493865a5c64716d41ca55e7e7671ffa?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZ6H-T0BGFBRTwtTZPGwUJZ04Q2Uvz0SzjFQfPUijF8t4pY2PSAzs5kmd7NRIgvVZZo60qbuIeCGyzCyXkZcy6MSt~Wxi8YCbdcy4SxBG5ojHD7wB0JR-xy~vnarEketKxAPPcYg2cHdMoGjqrAPjQvm7lkzbiQ4vrEdk~wyJ1oAbk-tXDPSCqIsaV3lj4R3Ua-H4DfrR1CfXoK7mXDz~sXWBuUHHKLRVT~IxOM-a-NzDAcOQciojCaRJfxGX8mQbNiEDHd1chwQUlGpFXfGcumGOgZ6KhoK5rr3LxC2DwY7LAcvK9FVFHSiFa8YupcCAAFC5jphVROpj1h4qCDejg__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Akshay Jha</p>
    </div>
    </div>
    
</div>
</div>
<div className='flex flex-col items-center justify-center gap-6'>
    <h3 className='text-red-600 text-2xl font-bold'>Logistics Lead</h3>
    <div className="cards flex gap-10">
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/19a5/3035/cba19e28ee0d008763ba622bcb6ada39?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poIsQ7F8VSltWU~nU7ydC2DPybgjmexaBdvirPo7BX3Li0BSlFpu2jEneFWPd0vwKf0Yoq8jbQI73VzbLC5a1jfY3--Q9w3XKtTE5zhXubYayREULkOzcJIhp8z7H0vyAljhfg0jUdrfyneJIrvX-DDxV7QSJmmx1e85Aw4PBuYU7rj2dIVTFXW7rS~MOM8xOnKp5HpkaZyvG6734YfAfvTdu9CRMBZ-~uu4CwQWo1WZEouNavAWMkcbJSAarbKzcjMNMCLQRatwcRSJPldCE1a2Xd9bE1jfXU4MJz2D-jeUEjSFm-2JRlwM-2y2UNnK3fMToLOqr2K3D54ckw7fUA__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Yash Kumar Gaur </p>
    </div>
    <div className="image bg-[#404040] w-[17vw] p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
        <img src="https://s3-alpha-sig.figma.com/img/93bd/4de5/e30c3b425d5004dad3a053f203a66960?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iqyyDWKX6X4M05IkXEA14-HoAB6BBDGQkp5ZYHAsW~VbdeERPHR1dXDtF9jpItj0mP32QI~ub5l8G-FXDhLBiF25i~GE3Wtg9rxNKXjU3N7fJ9heMEw7MapvQeRTDP5qpiDBTBOirsKTVsaK1Ry4sfVohd~Su0oIcUIwKjMgaeBkqs8vfQGIUl0Odrzx9OlcmM7yZxcHt0ata-DPxUAyl4RFFMCtI92HbuFjGFTdSbZLy28~OlS~1Ze5BCj2yXkEbv9nOsSqWlIbF35K9YzSs84~0JHKsa0Rtm0yMdOqwgIyU426uRyokkPcHmRd2MaQba60K-0SZdz5YVevR-KZug__" className='rounded-full w-48  h-48' alt="" />
        <p className='text-white text-xl font-bold'>Dhruv Sharma</p>
    </div>
    </div>
    
</div>
</section>
    </div>
  )
}

export default Team
