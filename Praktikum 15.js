$(document).ready(function () {
    $("#cmdcari").click(function () {
        var nim = $("#txNIM").val();
        var kls = $("#txKLS").val();
        var idmk = $("#txIDMK").val();
        var prm = "getpress-" + idmk + "-" + nim + "-" + kls + ".html";
        $.ajax({
            type: "GET",
            url: "https://mhstiki.artha.web.id/api/" + prm,
            dataType: "json",
            success: function (data) {
                var vnim = ": " + data["NIM"];
                var vnama = ": " + data["NAMA"];
                $("#vtxNIM").html(vnim);
                $("#vtxNAMA").html(vnama);

                // list nilai
                var nnilai = "<ol><ul>Nilai Aktif: " + data["N_AKTIF"] + "</ul><ul>Nilai Tugas: " + data["N_TUGAS"] + "</ul><ul>Nilai QUIS: " + data["N_QUIS"] + "</ul><ul>Nilai UTS: " + data["N_UTS"] + "</ul><ul>Nilai UAS: " + data["N_UAS"] + "</ul><ul>Nilai Akhir: " + data["N_NA"] + "</ul><ul>Grade: " + data["GRADE"] + "</ul></ol>";
                $("#VNilai").html(nnilai);
                // list kehadiran
                var jmlpertemuan = 16;
                var jhadir = jmlpertemuan - parseInt(data["MANGKIR"]);
                var hadir = "<h3>Presensi</h3>Jumlah Tidak Kehadiran: " + data["MANGKIR"] + "(" + data["PROS_HADIR"] + ")";
                $("#VHadir").html(hadir);
            }
        });
    });
});