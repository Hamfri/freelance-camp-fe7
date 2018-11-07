export class Proposal {
  constructor(
    /* Question mark implies that id is optional */
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_email?: string
  ) {}
}
// 15, 'Abc Company', 'http://portfolio.hamfri.com', 'ROR', 150, 120, 15, 'hamfri@hamfri.com'
