const mongoose = require("mongoose");
//스키마 = 설계도// 받을 데이터 모습
const userSchema = new mongose.Schema({
    name: {
        type: String,
        required: [true, "User must type name"],
        unique: true,
    },
    token: { //연결 id 정보
        type: String,
    },
    online: {  //온라인 유무
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model("User", userSchema);