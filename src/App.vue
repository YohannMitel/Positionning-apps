<template>
    <div class="container text-center  h-100 d-flex flex-column">
        <h1 class="my-4">Positionning Apps</h1>
        <ul class="list-group m-auto" style="font-size: 1.5rem;">
            <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <a href="/nlateration/index.html" target="_blank">N-Lateration</a>

                <div class="btn-group ms-4" role="group" aria-label="N-Lateration">
                    <button class="btn btn-outline-primary btn-sm " style="font-size: 1.2rem;"
                        @click="openPdf('NLateration')">
                        <i class="fa-solid fa-file-pdf"></i>
                    </button>

                    <a class="btn btn-outline-primary btn-sm " style="font-size: 1.2rem;"
                        href="https://github.com/YohannMitel/TD-N-Lateration" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </li>
            <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <a href="/fingerprint/index.html" target="_blank">Fingerprint</a>

                <div class="btn-group ms-4" role="group" aria-label="FingerPrint">

                    <button class="btn btn-outline-primary btn-sm " style="font-size: 1.2rem;"
                        @click="openPdf('Fingerprint')">
                        <i class="fa-solid fa-file-pdf"></i>
                    </button>

                    <a class="btn btn-outline-primary btn-sm " style="font-size: 1.2rem;"
                        href="https://github.com/YohannMitel/TD-Fingerprint" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>

            </li>
            <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <a href="/hmm/index.html" target="_blank">Hidden markov model</a>

                <div class="btn-group ms-4" role="group" aria-label="Hidden markov model">
                    <button class="btn btn-outline-primary btn-sm " style="font-size: 1.2rem;" @click="openPdf('HMM')">
                        <i class="fa-solid fa-file-pdf"></i>
                    </button>

                    <a class="btn btn-outline-primary btn-sm " style="font-size: 1.2rem;"
                        href="https://github.com/YohannMitel/Hidden-markov-model" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

const openPdf = (pdfName) => {
    const pdfUrl = '/pdf/' + pdfName + '.pdf'; // Replace with the actual path to your PDF file
    console.log(pdfUrl);
    window.open(pdfUrl, '_blank');
};
</script>
