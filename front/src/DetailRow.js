import React, { Component } from 'react'
import DetailCategory from './DetailCategory';


class DetailRow extends Component {
  render() {
    const tls = {
      inspect: {
        "Domain": "Nom de l'hôte",
        "Valid HTTPS": "Https valide",
        "HTTPS Bad Chain": "Erreur de nom d'hôte",
        "HTTPS Bad Hostname": "Erreur sur la chaîne de certification",
        "HSTS": "HSTS activé",
      }
    }

    const certificat = {
      sslyze: {
        "Key Type": "Chiffrement de la clé",
        "Key Length": "Taille de la clé",
        "Signature Algorith": "Signature de la clé",
        "Not After": "Valide jusqu'à",
        "Highest Served Issuer": "Organisme de certification",
        "Errors": "Erreur",
        "SSLv2": "SSLv2",
        "SSLv3": "SSLv3",
        "TLSv1.0": "TLSv1.0",
        "TLSv1.1": "TLSv1.1",
        "TLSv1.2": "TLSv1.2"
      },
      tls: {
        "Grade": "Note SSL",
        "Requires SNI": "SNI nécessaire",
        "SPDY": "SPDY",
        "HTTP/2": "HTTP/2"
      }
    }

    return (
      <tr className={this.props.visible ? 'visible' : 'hidden'}>
        <td colSpan="6">
          <div className="detail-category">
            <h3>SSL/TLS</h3>
            <DetailCategory data={this.props.site} dict={tls} />
          </div>

          <div className="detail-category">
            <h3>Certificat</h3>
            <DetailCategory data={this.props.site} dict={certificat} />
          </div>
        </td>
      </tr>
    );
  }
}

export default DetailRow
