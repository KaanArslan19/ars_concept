import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent mt={"2rem"} maxW={{ base: "768px", xl: "992px" }}>
      <Heading mb={"1rem"}>Hakkımızda</Heading>

      <Text mt={"1rem"} mb={"2rem"}>
        2022 yılında 7 dönümlük bahçemizde bulunan baba evini restore edip ikiz
        villa haline getirerek 2023 yılında konaklama sektörüne giriş yaptık. Bu
        evlerin bulunduğu yeri 1 dönüm olacak şekilde çevirip içerisine
        taşınabilir evler ekledik ve 7/24 kamera sistemiyle daha güvenli hale
        getirdik. İçerisinde 20 adet mandalina, 4 adet muz, 3 adet zeytin, 3
        adet avokado, 2 adet limon, 1 adet ceviz, 1 adet papaz eriği, 1 adet
        anjelika erik, 1 adet kiraz, 1 adet nar, 1 adet incir ağacının yanısıra
        yaz döneminde domates, biber, patlıcan, kabak, kış döneminde kışlık
        sebzeler diktiğimiz küçük bir bahçe bulunan bu alan misafirlerimizin
        konaklama süresince yararlanması düşünülerek oluşturuldu.
        <br /> <br /> Samimi bir şekilde tasarlanmış ve rahatınız için tüm
        detayların düşünüldüğü konseptimizle Arsconcepthouses'da mutlulukla
        hatırlayacağınız anılar biriktirebileceğiniz bir tatil deneyimi sizi
        bekliyor. <br /> <br />
        Hizmete başladığımız ilk günden beri her bir misafirimizin mutluluğu ve
        rahatı için Türk misafirperverliğiyle sektördeki yolculuğumuza devam
        ediyoruz. <br /> <br />
        Her gün kuş sesleriyle gözlerinizi açacağınız Arsconcepthouses'da
        kahvaltınız için yazsa domates, biber toplayabilir, kışsa mandalina
        toplayıp meyve suyu sıkabilirsiniz. Arabanızla 5 dk uzaklıktaki upuzun
        eşsiz Gümüldür sahiline gidip berrak sulara kendinizi bırakabilirsiniz.
        <br /> <br />
        Tesisimizde ayrıca kutlama, davet ve organizasyonlarınız için de hizmet
        vermekteyiz.
      </Text>
    </Container>
  );
};

export default About;
