import { LatLngTuple } from "leaflet";

export interface plotType {
  agentId: number;
  plotId?: number;
  status:boolean;
  farmerId: number;
  cropId:number;
  location: string;
  plotCords: LatLngTuple[];
  plotImage: string;
}

export interface farmerType {
  agentId: number;
  farmerId: number;
  farmerName: string;
  noOfPlots?: number;
  farmerPic?: string;
  phone?: string;
}

export interface AgentType {
  agentId: number;
  agentPic?: string;
  agentName?: string;
  agentMail?: string;
  agentPass?: string;
}
export interface selectedPlot extends plotType, farmerType, AgentType {
  crop:CropType|null
}

export interface PlotDets extends plotType,CropType {
  fid: farmerType;
}

export interface FullFarmerDetails extends farmerType {
  farmerFather?: string;
  address?: string;
  country?: string;
  district?: string;
  tehsil?: string;
  village?: string;
  season?: string;
  farmCode?: number;
  aadharNumber?: string;
  farmerAge?: number;
  state: string;
  migrantStatus?: string;
  landHoldingType?: string;
  farmerAssociation?: string;
  gender?: string;
  crops?: Record<string, string>;
  locations?: string[];
}

export interface CropStats {
  totalFarmers: number;
  totalPlots: number;
  totalArea: number;
}

export interface CropType {
  cropId: number;
  cropName: string;
  cropImage?: string;
  cropDesc?: string;
  cropColor?: string;
  stats?: {
    totalFarmers: number;
    totalPlots: number;
  };
}
export interface IndivitualCrop extends CropType {
  plots: {
    pid: {
      plotCords: LatLngTuple[];
      location: string;
      plotImage: string;
      plotId: number;
      fid: {
        farmerId: number;
        farmerName: string;
        farmerPic: string;
        agentId: number;
      };
    };
  }[];
  stages: Stages[];
}

export interface Stages {
  sid: number;
  stagename: string;
  duration: number;
  stagenumber: number;
  cropsubstages: {
    substageid: number;
    substagename: string;
    substagescoloumns: {
      substagedataid: number;
      substagecolomn: string;
      substagecoloumnvalue: string;
    }[];
  }[];
}
export interface filterType {
  filterColoumnName: string;
  filterValue: string[];
  filterDrop: boolean;
  filterSelected: string;
}


export interface fullPlotDetails extends selectedPlot {
  cropData: {
    cropStages: {
      stagename: string;
      duration:number;
      cropsubstages: {
        substagename: string;
        cropsubstagesvalues: {
          plotsubstagevalues: {
            name: string;
            data: string;
          }[];
        }[];
      }[];
    }[];
  }[];
}
