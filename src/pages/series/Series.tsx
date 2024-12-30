import { useEffect, useState } from "react";
import { ServicesSeries } from "../../services/Services.characters";
import Header from "../../shared/Header";
import SeriesCard from "../../shared/SeriesCard";
import "./../../shared/seriesCard.css";

type Props = {};

export const SeriesLayout = ({}: Props) => {
  const [series, setSeries] = useState<any>([]);
  useEffect(() => {
    const getSeries = async () => {
      const res = await ServicesSeries.getAllSeries();
      setSeries(res?.data.data.results);
    };
    getSeries();
  }, []);
  useEffect(() => {
    console.log(series);
  }, [series]);

  return (
    <div>
      <Header />
      <div className="series-list" style={{ marginTop: 100 }}>
        {series.length > 0
          ? series.map((item:any) => (
              <div className="col">
                <SeriesCard key={item.id} series={item} />
              </div>
            ))
          : "No hay series disponibles"}
      </div>
    </div>
  );
};

export default SeriesLayout;
