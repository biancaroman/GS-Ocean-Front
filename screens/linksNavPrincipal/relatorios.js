import React from 'react';
import { View, Text, FlatList } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { styles } from '../../styles/linksNavPrincipal/relatoriosStyles';

export default function Relatorios() {
  const relatorios = [
    { id: '1', titulo: 'Relatório de Janeiro', data: '01/02/2023' },
    { id: '2', titulo: 'Relatório de Fevereiro', data: '01/03/2023' },
    { id: '3', titulo: 'Relatório de Março', data: '01/04/2023' },
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

  const renderItemRelatorio = ({ item }) => (
    <View style={styles.relatorioItem}>
      <Text style={styles.relatorioTitulo}>{item.titulo}</Text>
      <Text style={styles.relatorioData}>{item.data}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Relatórios</Text>
        
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Relatórios Recentes</Text>
          <FlatList
            data={relatorios}
            renderItem={renderItemRelatorio}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Gráfico de Atividades</Text>
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
