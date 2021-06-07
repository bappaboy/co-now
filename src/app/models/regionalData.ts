export interface RegionalData {
  confirmedCasesForeign: number;
  confirmedCasesIndian: number;
  deaths: number;
  discharged: number;
  loc: string;
  totalConfirmed: number;
}

export interface SummaryData {
  confirmedButLocationUnidentified: number;
  confirmedCasesForeign: number;
  confirmedCasesIndian: number;
  deaths: number;
  discharged: number;
  total: number;
}

export interface CovidResponse {
  regional: RegionalData[];
  summary: SummaryData;
  lastOriginUpdate: Date;
  lastRefreshed: Date;
}

export interface CovidSvcResponse {
  data: CovidResponse;
}

export interface RegionalBedInfo {
  asOn: string;
  ruralBeds: number;
  ruralHospitals: number;
  state: string;
  totalBeds: number;
  totalHospitals: number;
  urbanBeds: number;
  urbanHospitals: number;
}

export interface BedSummary {
  ruralBeds: number;
  ruralHospitals: number;
  totalBeds: number;
  totalHospitals: number;
  urbanBeds: number;
  urbanHospitals: number;
}

export interface BedResponse {
  regional: RegionalBedInfo[];
  summary: BedSummary;
}

export interface BedSvcResponse {
  data: BedResponse;
}
