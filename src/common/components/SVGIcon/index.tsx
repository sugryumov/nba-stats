import React from 'react';
import { ISvgIcon, nbaTeam } from './interface';
import {
  NBA,
  ATL,
  BKN,
  BOS,
  CHA,
  CHI,
  CLE,
  DAL,
  DEN,
  DET,
  GSW,
  HOU,
  IND,
  LAC,
  LAL,
  MEM,
  MIA,
  MIL,
  MIN,
  NOP,
  NYK,
  OKC,
  ORL,
  PHI,
  PHX,
  POR,
  SAC,
  SAS,
  TOR,
  UTA,
  WAS,
} from './NbaTeam';

const getPath = (name: string, props: ISvgIcon) => {
  switch (name) {
    case nbaTeam.ATL:
      return <ATL {...props} />;

    case nbaTeam.BKN:
      return <BKN {...props} />;

    case nbaTeam.BOS:
      return <BOS {...props} />;

    case nbaTeam.CHA:
      return <CHA {...props} />;

    case nbaTeam.CHI:
      return <CHI {...props} />;

    case nbaTeam.CLE:
      return <CLE {...props} />;

    case nbaTeam.DAL:
      return <DAL {...props} />;

    case nbaTeam.DEN:
      return <DEN {...props} />;

    case nbaTeam.DET:
      return <DET {...props} />;

    case nbaTeam.GSW:
      return <GSW {...props} />;

    case nbaTeam.HOU:
      return <HOU {...props} />;

    case nbaTeam.IND:
      return <IND {...props} />;

    case nbaTeam.LAC:
      return <LAC {...props} />;

    case nbaTeam.LAL:
      return <LAL {...props} />;

    case nbaTeam.MEM:
      return <MEM {...props} />;

    case nbaTeam.MIA:
      return <MIA {...props} />;

    case nbaTeam.MIL:
      return <MIL {...props} />;

    case nbaTeam.MIN:
      return <MIN {...props} />;

    case nbaTeam.NOP:
      return <NOP {...props} />;

    case nbaTeam.NYK:
      return <NYK {...props} />;

    case nbaTeam.OKC:
      return <OKC {...props} />;

    case nbaTeam.ORL:
      return <ORL {...props} />;

    case nbaTeam.PHI:
      return <PHI {...props} />;

    case nbaTeam.PHX:
      return <PHX {...props} />;

    case nbaTeam.POR:
      return <POR {...props} />;

    case nbaTeam.SAC:
      return <SAC {...props} />;

    case nbaTeam.SAS:
      return <SAS {...props} />;

    case nbaTeam.TOR:
      return <TOR {...props} />;

    case nbaTeam.UTA:
      return <UTA {...props} />;

    case nbaTeam.WAS:
      return <WAS {...props} />;

    default:
      return <NBA {...props} />;
  }
};

const SVGIcon = ({ name = '', width = '100%', height = '100%' }: ISvgIcon) =>
  getPath(name, { width, height });

export default SVGIcon;
