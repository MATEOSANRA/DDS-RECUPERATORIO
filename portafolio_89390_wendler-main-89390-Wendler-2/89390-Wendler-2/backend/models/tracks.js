import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const Track = sequelize.define("Track", {
    trackId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "TRACK_ID",
    },
    name: {
        type: DataTypes.STRING,
        field: "NAME",
    },
    album: {
        type: DataTypes.STRING,
        field: "ALBUM",
    },
    artistName: {
        type: DataTypes.STRING,
        field: "ARTIST_NAME",
    },
    composer: {
        type: DataTypes.STRING,
        field: "COMPOSER",
    },
    milliseconds: {
        type: DataTypes.INTEGER,
        field: "MILLISECONDS",
    },
    genre: {
        type: DataTypes.STRING,
        field: "GENRE",
    },
    mediaType: {
        type: DataTypes.STRING,
        field: "MEDIA_TYPE",
    },
}, {
    tableName: "Tracks_Data",
    timestamps: false,
});

export default Track;
