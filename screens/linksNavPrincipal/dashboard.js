import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { styles } from '../../styles/linksNavPrincipal/dashboardStyles';


export default function Dashboard () {
  const deteccoesRecentes = [
    { id: '1', nomeEspecie: 'Peixe Palhaço', imagem: require('../../assets/blog/peixePalhaco.png') },
    { id: '2', nomeEspecie: 'Tartaruga Couro', imagem: require('../../assets/blog/tartarugaCouro.jpeg')  },
    { id: '3', nomeEspecie: 'Baleia Azul', imagem: require('../../assets/blog/baleiaAzul.jpg')  },
    { id: '4', nomeEspecie: 'Polvo Mimico', imagem: require('../../assets/blog/polvoMimico.jpeg')  },
    { id: '5', nomeEspecie: 'Tubarão Branco', imagem: require('../../assets/blog/tubaraoBranco.jpeg')  },
  ];

  const notificacoes = [
    { id: '1', mensagem: 'Nova espécie invasora detectada.' },
    { id: '2', mensagem: 'Relatório mensal disponível.' },
  ];

  const chartData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  const renderItemDeteccao = ({ item }) => (
    <View style={styles.deteccaoItem}>
      <Image source={item.imagem} style={styles.deteccaoImagem} />
      <Text style={styles.deteccaoTexto}>{item.nomeEspecie}</Text>
    </View>
  );


  const renderItemNotificacao = ({ item }) => (
    <Text style={styles.notificacaoTexto}>{item.mensagem}</Text>
  );

  return (
    <View style={{ flex: 1 }}>
      <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Dashboard</Text>
        
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Últimas Detecções</Text>
          <FlatList
            data={deteccoesRecentes}
            renderItem={renderItemDeteccao}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Notificações Recentes</Text>
          <FlatList
            data={notificacoes}
            renderItem={renderItemNotificacao}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Gráfico de Detecções</Text>
          <BarChart
            data={chartData}
            width={Dimensions.get('window').width - 32} 
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
        </View>
      </View>
    </View>
  );
};

