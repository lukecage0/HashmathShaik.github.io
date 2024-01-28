/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Empowering Transformers for Evidence-Based Medicine",
    authors:
      "Hashmath Shaik",
    researchYr: "2023-2024",
    citebox: "popup1",
    image: "assets/images/research-page/paper.png",
    citation: {
      vancouver:
        "Empowering Transformers for Evidence-Based Medicine ,Sabah Mohammed, Jinan Fiaidhi, Hashmath Shaik, medRxiv 2023.12.25.23300520; doi: https://doi.org/10.1101/2023.12.25.23300520",
    },
    abstract:
      "Breaking the barrier for practicing evidence-based medicine rely on effective methods for rapidly identifying relevant evidences from the body of biomedical literature. An important challenge confronted by the medical practitioners is the long time needed to browse, filter, summarize and compile information from different medical resources. Deep learning can help in solving this based on the automatic question answering (Q&A) and transformers. However, Q&A and transformers technologies are not trained to answer clinical queries that can be used for evidence-based practice nor it can respond to structured clinical questioning protocol like PICO (Patient/Problem, Intervention, Comparison and Outcome). This article describes the use of deep learning techniques for Q&A that is based on transformer models like BERT and GPT to answer PICO clinical questions that can be used for evidence-based practice extracted from sound medical research resources like PubMed. We are reporting acceptable clinical answers that are supported by findings from PubMed. Our transformer methods are reaching an acceptable state of the art performance based on two staged bootstrapping process involving filtering relevant articles followed by identifying articles that support the requested outcome expressed by the PICO question. Moreover, we are also reporting experimentations to empower our bootstrapping techniques with patch attentions to the most important keywords in the clinical case and the PICO questions. Our bootstrapped patched with attention is showing relevancy of the evidences collected based on an entropy metrics.",
    absbox: "absPopup1",
  },
  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="researchY">${researchYr}</div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
