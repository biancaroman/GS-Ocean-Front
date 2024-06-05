import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';
import { styles } from '../../styles/linksNavPrincipal/blogStyles';

export default function Blog() {
  return (
    <View style={styles.container}>
      <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <ImageBackground source={require('../../assets/background/backgroundBlog.jpg')} style={styles.image}>
        <Text style={styles.cardText}>Nosso Blog</Text>
      </ImageBackground>
      <ScrollView>
      <View style={styles.content}>
          <View style={styles.content}>
            <Text style={styles.titulos}>Espécies Marinhas em Extinção</Text>
            <View>
              <Text style={styles.subtitulos}>Tartaruga-de-couro (Dermochelys coriacea): </Text>
              <Text>A maior tartaruga marinha, criticamente ameaçada devido à pesca acidental, poluição e destruição de praias de nidificação.</Text> 
              <TouchableOpacity style={styles.card}>
                <ImageBackground 
                  source={require('../../assets/blog/tartarugaCouro.jpeg')} 
                  style={styles.imageBackground}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.subtitulos}>Baleia-azul (Balaenoptera musculus):</Text> 
              <Text>O maior animal do planeta, ameaçado por colisões com navios e mudanças climáticas.</Text> 
              <TouchableOpacity style={styles.card}>
                <ImageBackground 
                  source={require('../../assets/blog/baleiaAzul.jpg')} 
                  style={styles.imageBackground}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.subtitulos}>Tubarão-branco (Carcharodon carcharias): </Text> 
              <Text>População diminuindo devido à pesca predatória e demanda por suas barbatanas.</Text> 
              <TouchableOpacity style={styles.card}>
                <ImageBackground 
                  source={require('../../assets/blog/tubaraoBranco.jpeg')} 
                  style={styles.imageBackground}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.titulos}>Espécies Invasoras</Text>
            <View>
              <Text style={styles.subtitulos}>Peixe-leão (Pterois volitans): </Text>
              <Text>Originário do Indo-Pacífico, invadiu o Caribe e o Atlântico Ocidental, causando desequilíbrio nos recifes de coral.</Text>
              <TouchableOpacity style={styles.card}>
                <ImageBackground 
                  source={require('../../assets/blog/peixeLeao.jpeg')} 
                  style={styles.imageBackground}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.subtitulos}>Mexilhão-dourado (Limnoperna fortunei):</Text>
              <Text>Originário da Ásia, se espalhou por rios e lagos na América do Sul, causando problemas ambientais e econômicos.</Text> 
              <TouchableOpacity style={styles.card}>
                <ImageBackground 
                  source={require('../../assets/blog/mexilhaoDourado.png')} 
                  style={styles.imageBackground}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.titulos}>Curiosidades Marinhas</Text>
            <View>
              <Text style={styles.subtitulos}>Polvo-mímico (Thaumoctopus mimicus):</Text>
              <Text>Mestre em camuflagem, pode imitar outros animais marinhos.</Text>
              <TouchableOpacity style={styles.card}>
                <ImageBackground 
                  source={require('../../assets/blog/polvoMimico.jpeg')} 
                  style={styles.imageBackground}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.subtitulos}>Peixe-palhaço (Amphiprioninae):</Text>
              <Text>Vive em anêmonas e tem uma relação simbiótica com elas.</Text>
              <TouchableOpacity style={styles.card}>
                <ImageBackground 
                  source={require('../../assets/blog/peixePalhaco.png')} 
                  style={styles.imageBackground}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
      </View>
        </ScrollView>
    </View>
  );
}

