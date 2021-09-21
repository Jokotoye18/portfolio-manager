/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { StyleSheet, View, Text as BaseText } from 'react-native';
import { icons } from '../../constants';

import { ICoin } from '../../models';
import { globalStyles } from '../../styles';
import { getCoinPercentage, getCurrentPrice } from '../../utils';
import { Text } from '../common';

type CoinCardProps = {
  coin: ICoin;
};

export const CoinCard = ({ coin }: CoinCardProps) => {
  const { unit, cost, coin: token, prices, percentageToSellAt } = coin;

  const CADPrice = useMemo(
    () => getCurrentPrice(prices[0], unit),
    [prices, unit],
  );
  const CNYPrice = useMemo(
    () => getCurrentPrice(prices[1], unit),
    [prices, unit],
  );
  const USDPrice = useMemo(
    () => getCurrentPrice(prices[2], unit),
    [prices, unit],
  );

  const percentage = useMemo(
    () => getCoinPercentage(cost, CADPrice),
    [CADPrice, cost],
  );
  const hasIncreased = useMemo(() => CADPrice > cost, [CADPrice, cost]);
  const hasReachTarget = useMemo(
    () =>
      percentageToSellAt
        ? percentage >= percentageToSellAt
          ? true
          : false
        : parseInt(percentage, 10) >= 25 && hasIncreased
        ? true
        : false,
    [hasIncreased, percentage, percentageToSellAt],
  );

  return (
    <View
      style={[
        styles.container,
        globalStyles.rowBetween,
        hasReachTarget && styles.containerReached,
      ]}
    >
      <View style={styles.contentBox}>
        <Text text={`${unit}`} style={styles.coinValue} />
        <Text text={`${token}`} style={styles.coinName} />
        <Text text={`${cost} CAD`} style={styles.value} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 10 }}>
          <Text
            text={'current price'}
            textAlign="center"
            style={styles.title}
          />
          <Text
            text={`${CADPrice} CAD`}
            textAlign="center"
            style={styles.value}
          />
        </View>
        <View>
          <Text text={'other price'} textAlign="center" style={styles.title} />
          <BaseText>
            <Text
              text={`${CNYPrice} CNY`}
              textAlign="center"
              style={styles.value}
            />
            {', '}
            <Text
              text={`${USDPrice} USD`}
              textAlign="center"
              style={styles.value}
            />
          </BaseText>
        </View>
      </View>
      <View style={[styles.contentBox, { alignItems: 'flex-end' }]}>
        <View style={globalStyles.rowEnd}>
          <icons.AntDesign
            name={hasIncreased ? 'arrowup' : 'arrowdown'}
            size={20}
            color={hasIncreased ? 'green' : 'red'}
          />
          <Text text={`${percentage}%`} style={[styles.coinValue]} />
        </View>
        <Text
          text={hasReachTarget ? 'Yes' : 'No'}
          color={hasReachTarget ? 'green' : 'black'}
          style={[styles.reached]}
          fontWeight="600"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#ddd',
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    borderColor: 'green',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.0,
    elevation: 3,
  },
  containerReached: {
    borderWidth: 1,
    shadowColor: 'rgba(28, 163, 73, 0.5)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  contentBox: {
    flexBasis: '25%',
  },
  coinName: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 6,
  },
  coinValue: {
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 2,
  },
  coinCost: {
    fontWeight: '400',
    fontSize: 13,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    paddingBottom: 2,
  },
  value: {
    fontSize: 10,
  },
  increaseStyle: {
    color: 'green',
  },
  reached: {
    paddingTop: 25,
    fontSize: 15,
  },
});
